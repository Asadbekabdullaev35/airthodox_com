import React, { useEffect } from 'react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          versionID: string;
        }) => void;
      };
    };
  }
}

const SCRIPT_ID = 'voiceflow-script';

const ChatbotScript = () => {
  useEffect(() => {
    // Check if script already exists
    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'text/javascript';
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.onload = () => {
      if (window.voiceflow?.chat?.load) {
        window.voiceflow.chat.load({
          verify: { projectID: '674b2ea0cf4ed271a39d296a' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(SCRIPT_ID);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

export default ChatbotScript;