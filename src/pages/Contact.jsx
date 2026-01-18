import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project_requirement: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Using FormSubmit.co AJAX API
            const response = await fetch("https://formsubmit.co/ajax/ashiqkbk10@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Inquiry from ${formData.name}`,
                    _template: "table"
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                setFormData({ name: '', email: '', project_requirement: '', message: '' });
            } else {
                setStatus({ type: 'error', message: result.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please check your connection.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ padding: '8rem 0 5rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <span className="section-label">Get In Touch</span>
                        <h1 style={{ maxWidth: '800px', margin: '0 auto' }}>Let's Build Something Meaningful Together</h1>
                        <p style={{ fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto' }}>Ready to start your project? We'd love to hear from you and discuss how we can help your business grow.</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'start' }}>
                        {/* Contact Form */}
                        <motion.div {...fadeInUp}>
                            <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Send Us a Message</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-xl)', color: 'var(--text-secondary)' }}>Fill out the form below and we'll get back to you within 24 hours.</p>
                            
                            {status.message && (
                                <div className={`form-message ${status.type}`} style={{ display: 'block' }}>
                                    {status.message}
                                </div>
                            )}
                            
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="project_requirement">Project Type *</label>
                                    <select 
                                        id="project_requirement" 
                                        name="project_requirement" 
                                        required
                                        value={formData.project_requirement}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="Mobile App Development">Mobile App Development</option>
                                        <option value="Web & Platform Development">Web & Platform Development</option>
                                        <option value="Cloud & Integrations">Cloud & Integrations</option>
                                        <option value="Consulting & Support">Consulting & Support</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="message">Project Details *</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        required 
                                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </motion.div>
                        
                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="contact-info-card">
                                <h3 style={{ marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-2xl)' }}>Contact Information</h3>
                                
                                <div className="contact-item">
                                    <div className="contact-icon">📧</div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)', color: 'var(--text-primary)' }}>Email</h4>
                                        <a href="mailto:ashdesigns@zohoamil.in" style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)' }}>ashdesigns@zohoamil.in</a>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="contact-icon">📱</div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)', color: 'var(--text-primary)' }}>Phone</h4>
                                        <a href="tel:+919876543210" style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)' }}>+91 9148097564</a>
                                    </div>
                                </div>
                                
                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.5rem', fontSize: 'var(--font-size-lg)', color: 'var(--text-primary)' }}>Location</h4>
                                        <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 'var(--font-size-base)' }}>Remote · India 🇮🇳</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card" style={{ marginTop: 'var(--spacing-xl)', background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-cyan) 100%)', color: 'var(--white)', border: 'none' }}>
                                <h3 style={{ color: 'var(--white)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-2xl)' }}>Why Choose Us?</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {[
                                        '5+ years of experience',
                                        'Transparent communication',
                                        'Quality-focused development',
                                        'On-time delivery',
                                        'Ongoing support'
                                    ].map((item, index) => (
                                        <li key={index} style={{ padding: 'var(--spacing-sm) 0', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                            <span style={{ fontSize: '1.5rem' }}>✓</span>
                                            <span style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: 'var(--font-size-lg)' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">FAQ</span>
                        <h2>Frequently Asked Questions</h2>
                        <p>Quick answers to common questions</p>
                    </motion.div>
                    
                    <div className="grid grid-2">
                        {[
                            { q: "What's your typical project timeline?", a: "Project timelines vary based on complexity. A simple website takes 2-3 weeks, while a mobile app typically requires 2-3 months. We'll provide a detailed timeline during our initial consultation." },
                            { q: "Do you offer ongoing support?", a: "Yes! We provide maintenance and support packages to ensure your product continues to run smoothly. We're here to help with updates, bug fixes, and new features." },
                            { q: "What's your development process?", a: "We follow a structured approach: Discovery, Design, Development, and Launch. You'll receive regular updates and have opportunities to provide feedback throughout the process." },
                            { q: "Can you work with our existing team?", a: "Absolutely! We're experienced in collaborating with in-house teams, providing consulting, code reviews, or handling specific components of larger projects." }
                        ].map((item, index) => (
                            <motion.div 
                                className="card"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 style={{ color: 'var(--primary-blue)', marginBottom: 'var(--spacing-md)' }}>{item.q}</h4>
                                <p style={{ margin: 0 }}>{item.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
