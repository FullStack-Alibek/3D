import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectsGallery } from './components/ProjectsGallery';
import { WorkflowCaseStudy } from './components/WorkflowCaseStudy';
import { ServicesPricing } from './components/ServicesPricing';
import { SoftwareStack } from './components/SoftwareStack';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <ProjectsGallery />
        <BeforeAfterSlider />
        <WorkflowCaseStudy />
        <ServicesPricing />
        <SoftwareStack />
        <TestimonialsFAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
