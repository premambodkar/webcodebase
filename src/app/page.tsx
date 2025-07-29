"use client"

import Head from 'next/head';
import "./globals.css";
import ContactForm from '../../component/ContactForm';
import { useEffect, useState } from 'react';
import { FooterContext } from '../../component/FooterContext';

const services = [
  { title: 'Web Development', desc: 'Responsive and scalable websites using React, Angular, Next.js, and Node.js.' },
  { title: 'Mobile App Development', desc: 'Cross-platform and native mobile apps using React Native, Flutter, Swift, and Kotlin.' },
  { title: 'UI/UX Design', desc: 'Modern, intuitive interfaces built with user-centric design principles and accessibility in mind.' },
  { title: 'Custom Software Development', desc: 'Tailored ERP, CRM, SaaS, and enterprise solutions to streamline your business processes.' },
  { title: 'CMS & E-commerce', desc: 'Custom content management systems and online stores using WordPress, Magento, and Shopify.' },
  { title: 'Progressive Web Apps (PWA)', desc: 'App-like web experiences with offline support, push notifications, and faster performance.' },
  { title: 'Cloud & DevOps', desc: 'Cloud-native development, CI/CD, Docker, Kubernetes, and infrastructure automation on AWS, Azure, and GCP.' },
  { title: 'QA & Testing', desc: 'Manual and automated testing for functionality, performance, and security across platforms.' },
  { title: 'AI & Emerging Tech', desc: 'Integrate AI, machine learning, chatbots, AR/VR, and blockchain into your digital products.' },
];

export default function Home() {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    loadConfig()
  }, [])

  const loadConfig = async () => {
    try {
      const response = await fetch('/config.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const config = await response.json();
      setConfig(config)
    } catch (error) {
      console.error('Failed to load config:', error);
    }
  };

  return (
    <>
      <Head>
        <title>{config?.site_title}</title>
        <meta name="description" content="Custom Web & Mobile Software Development" />
      </Head>

      <header className="bg-header-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4">{config?.site_title}</h1>
          <p className="lead">{config?.site_description}</p>
        </div>
      </header>

      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-4 text-center">{config?.services?.title}</h2>
          <div className="row">
            {config?.services?.services.map((service: any, i: any) => (
              <div className="col-md-4 mb-4" key={i}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center">{config?.about_us?.title}</h2>
          {config?.about_us?.description.map((service: any, i: any) => (
            <p className="text-center" key={i}>
              {service.text}
            </p>
          ))}
        </div>
      </section>

      <ContactForm />

      <FooterContext config={config}/>
    </>
  );
}
