'use client';

import { useState, FC } from 'react';
import './FaqSection.css'; // Assuming you add custom styles here

interface FAQItem {
  question: string;
  answer: string;
}

const FaqSection = (props: any) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number): void => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-dark">{props?.config?.faqs?.title}</h2>
        <h6 className="text-center mb-4 text-dark">{props?.config?.faqs?.description}</h6>
        <div className="accordion-custom">
          {props?.config?.faqs?.faqs.map((faq:FAQItem, i: number) => (
            <div className="accordion-item-custom card-neo mb-2 rounded-3 shadow" key={i}>
              <button
                className="accordion-button-custom w-100 text-start"
                onClick={() => toggle(i)}
              >
                {faq.question}
              </button>
              <div className={`accordion-panel ${openIndex === i ? 'open' : ''}`}>
                <p className="mb-0">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
