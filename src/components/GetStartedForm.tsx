import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import SuccessMessage from './form/SuccessMessage';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  requirements: string;
}

interface GetStartedFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedForm: React.FC<GetStartedFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    requirements: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setErrors({});
      setShowSuccess(false);
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        requirements: ''
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};
    
    switch (step) {
      case 1:
        if (!formData.fullName) newErrors.fullName = 'Name is required';
        break;
      case 2:
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        break;
      case 3:
        if (!formData.company) newErrors.company = 'Company name is required';
        break;
      case 4:
        if (!formData.requirements) newErrors.requirements = 'Please describe your requirements';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateStep()) {
      setIsSubmitting(true);
      try {
        // Create form data object
        const submissionData = new FormData();
        submissionData.append('access_key', 'e5a948c4-2bb5-407f-b5f0-d85031f1330d');
        submissionData.append('subject', 'New Contact Form Submission');
        submissionData.append('from_name', formData.fullName);
        submissionData.append('email', formData.email);
        submissionData.append('company', formData.company);
        submissionData.append('message', formData.requirements);

        // Send to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: submissionData
        });

        const result = await response.json();

        if (response.ok) {
          setShowSuccess(true);
          setTimeout(() => {
            onClose();
            setTimeout(() => {
              setShowSuccess(false);
              setIsSubmitting(false);
            }, 300);
          }, 3000);
        } else {
          throw new Error(result.message || 'Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ email: 'Failed to submit form. Please try again.' });
        setIsSubmitting(false);
      }
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const renderStep = () => {
    if (showSuccess) {
      return <SuccessMessage />;
    }

    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 font-mono">What is your full name?</h2>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => updateField('fullName', e.target.value)}
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg p-4 text-white focus:border-purple-500 transition-colors"
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm">{errors.fullName}</p>
            )}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 font-mono">What's your email address?</h2>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg p-4 text-white focus:border-purple-500 transition-colors"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 font-mono">What's your company name?</h2>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => updateField('company', e.target.value)}
              className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg p-4 text-white focus:border-purple-500 transition-colors"
              placeholder="Acme Inc."
            />
            {errors.company && (
              <p className="text-red-400 text-sm">{errors.company}</p>
            )}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-400 font-mono">Tell us about your requirements</h2>
            <textarea
              value={formData.requirements}
              onChange={(e) => updateField('requirements', e.target.value)}
              className="w-full h-32 bg-gray-900/50 border border-purple-500/20 rounded-lg p-4 text-white focus:border-purple-500 transition-colors"
              placeholder="Describe your needs..."
            />
            {errors.requirements && (
              <p className="text-red-400 text-sm">{errors.requirements}</p>
            )}
          </div>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 min-h-screen overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden="true" />
        <div className="relative w-full max-w-xl bg-black border border-purple-500/20 rounded-xl p-8 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
          >
            <X size={24} />
          </button>

          {!showSuccess && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 mx-1 rounded ${
                      i < step ? 'bg-purple-500' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {renderStep()}

          {!showSuccess && (
            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                className={`px-6 py-3 rounded-lg font-mono transition-all ${
                  step === 1
                    ? 'text-gray-600 cursor-not-allowed'
                    : 'text-white hover:bg-purple-600/20'
                }`}
                disabled={step === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={isSubmitting}
                className={`bg-purple-600 text-white px-6 py-3 rounded-lg font-mono hover:bg-purple-700 transition-all ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : step === 4 ? 'Submit' : 'Next'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStartedForm;