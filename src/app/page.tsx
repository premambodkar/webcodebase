"use client"

import Head from 'next/head';
import "./globals.css";
import "./custom-colors.css"
import ContactForm from '../../component/ContactForm';
import { useEffect, useState } from 'react';
import { FooterContext } from '../../component/FooterContext';
import HeaderContext from '../../component/HeaderContext';
import FaqSection from '../../component/FaqSection';

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
      {config === null ? 'Application is loading content' : <>
        <Head>
          <title>{config?.site_title}</title>
          <meta name="description" content="Custom Web & Mobile Software Development" />
        </Head>

        <HeaderContext config={config} />

        <section
          id="about"
          className="py-5 bg-cover bg-center"
        >
          <div className='container'>
            <h2 className="mb-4 text-center">{config?.about_us?.title}</h2>
            <div className=" bg-white bg-opacity-80 rounded p-4 shadow-md">
              {config?.about_us?.description.map((service: any, i: any) => (
                <p className="text-center" key={i}>
                  {service.text}
                </p>
              ))}
            </div>
          </div>

        </section>

        <section id="industries" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Industries We Serve</h2>
            <div className="row text-center">
              {[
                { icon: "💼", title: "FinTech", desc: "Secure and scalable financial software for banking, lending, and digital payments." },
                { icon: "🏥", title: "Healthcare", desc: "HIPAA-compliant healthcare apps, EMRs, and patient engagement platforms." },
                { icon: "🎓", title: "Education", desc: "E-learning platforms, LMS systems, and virtual classroom solutions." },
                { icon: "🛒", title: "E-commerce", desc: "End-to-end e-commerce solutions, from storefront to checkout." },
                { icon: "🚚", title: "Logistics", desc: "Real-time tracking, inventory, and supply chain management tools." },
                { icon: "🏨", title: "Hospitality", desc: "Hotel booking engines, guest experience apps, and automation solutions." },
              ].map((industry, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body">
                      <div className="display-4 mb-3">{industry.icon}</div>
                      <h5 className="card-title">{industry.title}</h5>
                      <p className="card-text">{industry.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-5 card-neo">
          <div className="container">
            <h2 className="mb-4 text-center">{config?.services?.title}</h2>
            <div className="row">
              {config?.services?.services.map((service: any, i: any) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card h-100 shadow-sm overflow-hidden image-hover-card">
                    <img
                      src={`./images/${service.image}`}
                      className="card-img-top image-hover"
                      alt={service.title}
                    />
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

        <FaqSection config={config}/>

        <ContactForm id="contact" config={config}/>

        <FooterContext config={config} /></>}
    </>
  );
}

