import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
};

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ padding: '8rem 0 5rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <span className="section-label">About Us</span>
                        <h1 style={{ maxWidth: '800px', margin: '0 auto' }}>Building Digital Products That Make a Difference</h1>
                        <p style={{ fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto' }}>A boutique digital studio dedicated to creating simple, powerful solutions for startups, NGOs, and growing businesses.</p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div {...fadeInUp}>
                            <span className="section-label">Our Story</span>
                            <h2>Passionate About Technology & Innovation</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)' }}>Founded with a passion for clean code and user-friendly design, we've helped numerous organizations bring their digital visions to life.</p>
                            <p>Our approach combines technical excellence with a deep understanding of business needs. We believe that great software should be intuitive, reliable, and built to last.</p>
                            <p>Every project we undertake is treated with the same care and attention to detail, regardless of size or budget. We measure our success by the impact our solutions have on your business.</p>
                        </motion.div>

                        <motion.div
                            className="card"
                            style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--accent-cyan) 100%)', color: 'var(--white)', padding: 'var(--spacing-2xl)' }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 style={{ color: 'var(--white)', fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-lg)' }}>Our Mission</h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: 'var(--font-size-xl)', lineHeight: 1.8, margin: 0 }}>To empower businesses with digital products that are simple to use, powerful in functionality, and built with integrity.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Leadership</span>
                        <h2>Meet the Founder</h2>
                    </motion.div>

                    <motion.div
                        className="card"
                        style={{ maxWidth: '900px', margin: '0 auto' }}
                        {...fadeInUp}
                    >
                        <div className="grid grid-2" style={{ gap: 'var(--spacing-2xl)', alignItems: 'center' }}>
                            <div style={{ textAlign: 'center' }}>
                                <img
                                    src="/assets/images/founder.jpg"
                                    alt="Mohammad Ashik"
                                    style={{ width: '180px', height: '180px', borderRadius: '50%', margin: '0 auto var(--spacing-lg)', display: 'block', objectFit: 'cover', boxShadow: 'var(--shadow-xl)', border: '4px solid var(--white)' }}
                                />
                                <h3 style={{ marginBottom: '0.5rem' }}>Mohammad Ashik</h3>
                                <p style={{ color: 'var(--primary-blue)', fontWeight: 600, fontSize: 'var(--font-size-lg)', margin: 0 }}>Product Engineer & Founder</p>
                            </div>
                            <div>
                                <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-md)' }}>With over 5 years of experience in software development, Mohammad Ashik founded Ash Designs to help businesses leverage technology effectively.</p>
                                <p>His expertise spans mobile development, web platforms, and cloud architecture. Driven by a commitment to quality and user satisfaction, Ashik personally oversees every project to ensure it meets the highest standards of excellence.</p>
                                <p style={{ margin: 0 }}>His vision is to make quality digital products accessible to businesses of all sizes, helping them compete and thrive in the digital age.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Company Values */}
            <section>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Our Values</span>
                        <h2>The Principles That Guide Us</h2>
                        <p>Everything we do is driven by these core beliefs</p>
                    </motion.div>

                    <div className="grid grid-3">
                        {[
                            { icon: '🎯', title: 'Focus on Results', desc: 'We measure success by the impact our solutions have on your business. Every feature we build serves a clear purpose and delivers tangible value.' },
                            { icon: '✨', title: 'User-Friendly Design', desc: 'Beautiful interfaces that are intuitive and accessible. We design with your users in mind, ensuring delightful experiences at every touchpoint.' },
                            { icon: '🔒', title: 'Clean & Secure Code', desc: 'Quality engineering is non-negotiable. We write maintainable code with security best practices baked in from day one.' },
                            { icon: '🤝', title: 'Transparent Communication', desc: 'Regular updates, honest timelines, and open dialogue. You\'re always in the loop throughout the development process.' },
                            { icon: '⚡', title: 'Continuous Improvement', desc: 'We don\'t just launch and leave. We monitor, optimize, and evolve your product based on real-world performance data.' },
                            { icon: '💡', title: 'Innovation & Simplicity', desc: 'Leveraging the latest technologies while keeping solutions simple and practical. No unnecessary complexity, just results.' }
                        ].map((item, index) => (
                            <motion.div
                                className="card"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: 'linear-gradient(135deg, var(--grey-900) 0%, var(--grey-800) 100%)', color: 'var(--white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <h2 style={{ color: 'var(--white)', fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-md)' }}>Let's Work Together</h2>
                        <p style={{ color: 'var(--grey-300)', fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>Ready to bring your digital project to life? We'd love to hear from you and discuss how we can help.</p>
                        <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;
