import React, { useState } from 'react';
import "./contact.css"
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <h1>LIÊN HỆ VỚI CHÚNG TÔI</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tên Khách Hàng</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Nội Dung : </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Gửi Liên Hệ</button>
      </form>
      <div className="contact-info">
        <h2>Thông tin liên hệ</h2>
        <p>Số điện thoại : (+84) 858369609</p>
        <p>Email: support.printerstore@gmail.com</p>
        <p>Address: 123 Printer St, Print City, PC 12345</p>
      </div>
    </div>
  );
};

export default ContactPage;