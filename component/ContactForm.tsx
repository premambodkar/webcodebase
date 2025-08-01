'use client'

import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function ContactSection(props: any) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ensure portal works after mount

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('https://tekmbilical.com//send-email.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.text();
    if (res.ok) {
      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus(`Failed: ${data}`);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const modal = (
    <div id="contact" className="show" style={{ zIndex: 1080 }}>
      <div
        className="modal d-block fade show"
        tabIndex={-1}
        role="dialog"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document" >
          <div className="modal-content" >
            <div className="modal-header bg-primary text-white" style={{
              background: 'linear-gradient(to right, #2563eb, #1e40af)',
            }}>
              <h5 className="modal-title">Contact Us</h5>
              <button type="button" className="btn-close btn-close-white" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  className="form-control mb-2"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="form-control mb-2"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="form-control mb-2"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button className="btn btn-primary w-100" type="submit" style={{
                  background: 'linear-gradient(to right, #2563eb, #1e40af)',
                }}>Send</button>
                <p className="mt-3 text-center">{status}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* CTA Section */}


      <section
        className="text-center text-white py-5"
        style={{
          background: 'linear-gradient(to right, #2563eb, #1e40af)',
        }}
      >
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">
            Ready to Build the Future with Us?
          </h2>
          <p className="lead mb-4">
            Let’s discuss your next big idea. Schedule a free consultation today.
          </p>
          <button onClick={openModal} className="btn btn-light text-primary fw-semibold px-4 py-2">
            Contact Us
          </button>

        </div>
      </section>

      {/* Modal Portal */}
      {mounted && isModalOpen && typeof window !== 'undefined' &&
        ReactDOM.createPortal(modal, document.body)}
    </>
  );
}
