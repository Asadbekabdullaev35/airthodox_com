import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { solutions } from '../data/solutions';
import { serviceContent } from '../data/serviceContent';
import ServiceHero from '../components/service/ServiceHero';
import ServiceProblem from '../components/service/ServiceProblem';
import ServiceSolution from '../components/service/ServiceSolution';
import ServiceCTA from '../components/service/ServiceCTA';

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = solutions.find(s => s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === serviceId);
  const content = serviceId ? serviceContent[serviceId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service || !content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-20">
      <ServiceHero service={service} />
      <ServiceProblem {...content.problem} />
      <ServiceSolution {...content.solution} />
      <ServiceCTA />
    </div>
  );
};

export default ServicePage;