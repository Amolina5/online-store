import React, { useState } from 'react';
import './styles/Contact.css'; // Ensure this CSS file only contains styles for ContactPage

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  // Validate form inputs
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <main className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <label className="form-label">Message</label>
            <textarea className="form-control" name="message" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <div className="controls">
            <button className="btn btn-sm btn-dark" type="submit">Send Message</button>
          </div>
        </form>
      </main>
      <footer className="contact-footer">
        <p>© 2023 Retro Arcade Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;