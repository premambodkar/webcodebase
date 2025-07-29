'use client'

import { use, useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

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

  return (
    <div className="container py-5">
      <h2>Contact Us</h2>
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
        <button className="btn btn-primary" type="submit">Send</button>
        <p className="mt-3">{status}</p>
      </form>
    </div>
  );
}
