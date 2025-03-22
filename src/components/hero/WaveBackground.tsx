import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';

const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mouse;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    vec2 mouseNorm = mouse / resolution;
    float dist = length(uv - mouseNorm);
    
    // Create multiple wave layers
    float wave1 = sin(dist * 20.0 - time) * 0.5 + 0.5;
    float wave2 = sin(dist * 15.0 - time * 1.2) * 0.5 + 0.5;
    float wave3 = sin(dist * 10.0 - time * 0.8) * 0.5 + 0.5;
    
    // Combine waves with different intensities
    float waves = wave1 * 0.4 + wave2 * 0.3 + wave3 * 0.3;
    
    // Add mouse interaction
    float mouseEffect = smoothstep(0.5, 0.0, dist) * 0.5;
    waves += mouseEffect;
    
    // Create gradient color
    vec3 color1 = vec3(0.66, 0.33, 0.97); // Purple
    vec3 color2 = vec3(0.33, 0.33, 0.97); // Blue
    vec3 finalColor = mix(color1, color2, waves);
    
    // Add glow effect
    float glow = exp(-dist * 4.0) * 0.5;
    finalColor += vec3(glow);
    
    gl_FragColor = vec4(finalColor * 0.3, 0.4); // Adjust opacity
  }
`;

const WaveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    // Create shader program
    const program = gl.createProgram();
    if (!program) return;

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    gl.shaderSource(vs, vertexShader);
    gl.shaderSource(fs, fragmentShader);
    gl.compileShader(vs);
    gl.compileShader(fs);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Create geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Set up attributes and uniforms
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const timeUniform = gl.getUniformLocation(program, 'time');
    const resolutionUniform = gl.getUniformLocation(program, 'resolution');
    const mouseUniform = gl.getUniformLocation(program, 'mouse');

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    // Animation loop
    const animate = () => {
      const time = (Date.now() - startTimeRef.current) / 1000;
      gl.uniform1f(timeUniform, time);
      gl.uniform2f(mouseUniform, mousePosition.x * window.devicePixelRatio, 
        (window.innerHeight - mousePosition.y) * window.devicePixelRatio);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default WaveBackground;