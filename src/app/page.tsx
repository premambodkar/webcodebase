"use client"

import Head from 'next/head';
import "./globals.css";
import ContactForm from '../../component/ContactForm';
import { useEffect, useState } from 'react';
import { FooterContext } from '../../component/FooterContext';
import HeaderContext from '../../component/HeaderContext';

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

        {/* <BannerContext /> */}

        <section id="services" className="py-5 bg-light">
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

        <section
          id="about"
          className="py-5 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/about_us.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div className="container bg-white bg-opacity-80 rounded p-4 shadow-md">
            <h2 className="mb-4 text-center">{config?.about_us?.title}</h2>
            {config?.about_us?.description.map((service: any, i: any) => (
              <p className="text-center" key={i}>
                {service.text}
              </p>
            ))}
          </div>
        </section>

        <ContactForm />

        <FooterContext config={config} /></>}

    </>
  );
}
