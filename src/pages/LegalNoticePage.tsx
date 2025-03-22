import React, { useEffect } from 'react';
import LegalNotice from '../components/LegalNotice';

const LegalNoticePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8 font-mono">Legal Notice</h1>
        <LegalNotice />
      </div>
    </div>
  );
};

export default LegalNoticePage;