import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
};

const Services = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ padding: '8rem 0 5rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <span className="section-label">Our Services</span>
                        <h1 style={{ maxWidth: '800px', margin: '0 auto' }}>Comprehensive Digital Solutions</h1>
                        <p style={{ fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto' }}>From mobile apps to cloud infrastructure, we provide end-to-end technology solutions that drive business growth.</p>
                    </motion.div>
                </div>
            </section>

            {/* Mobile App Development */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div {...fadeInUp}>
                            <span className="section-label" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>01 - Mobile Apps</span>
                            <h2 style={{ marginTop: 'var(--spacing-md)' }}>Mobile App Development</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)' }}>Native-quality apps for Android & iOS built with Flutter</p>
                            <p>We create beautiful, high-performance mobile applications that work seamlessly across both platforms. Using Flutter, we deliver native-like experiences with a single codebase, reducing development time and costs while maintaining exceptional quality.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-lg)' }}>
                                {['Cross-platform iOS & Android apps', 'Beautiful, responsive UI/UX design', 'Offline functionality & data sync', 'App store deployment & optimization'].map((item, index) => (
                                    <li key={index} style={{ padding: 'var(--spacing-sm) 0', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <span style={{ color: 'var(--primary-blue)', fontSize: '1.5rem' }}>✓</span>
                                        <span style={{ fontSize: 'var(--font-size-lg)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="service-card-image" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                <span style={{ fontSize: '6rem', position: 'relative', zIndex: 1 }}>📱</span>
                            </div>
                            <div className="service-card-content">
                                <h3>Flutter Development</h3>
                                <p>Fast, beautiful, and natively compiled applications for mobile, web, and desktop from a single codebase.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Web & Platform Development */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div
                            className="service-card"
                            style={{ order: 2 }} // Note: Flex order might not work in grid unless simplified, but typical implementation uses order locally. However, Grid layout doesn't respect `order` like flex unless items are flex-children or we use grid-areas. The original CSS defined `grid-2` which is grid. The order: 2 only works on flex items or grid items.
                            // Actually, order works on grid items too.
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="service-card-image" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                                <span style={{ fontSize: '6rem', position: 'relative', zIndex: 1 }}>💻</span>
                            </div>
                            <div className="service-card-content">
                                <h3>Modern Web Solutions</h3>
                                <p>Responsive websites and powerful web applications built with the latest technologies and best practices.</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ order: 1 }} {...fadeInUp}>
                            <span className="section-label" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', color: 'white' }}>02 - Web Platforms</span>
                            <h2 style={{ marginTop: 'var(--spacing-md)' }}>Web & Platform Development</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)' }}>Websites, dashboards, and admin panels that drive results</p>
                            <p>From corporate websites to complex web applications, we build scalable solutions that are fast, secure, and easy to manage. Our web platforms are designed with both users and administrators in mind, ensuring smooth operations and excellent experiences.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-lg)' }}>
                                {['Responsive corporate websites', 'Custom web applications & dashboards', 'Admin panels & content management', 'E-commerce & booking systems'].map((item, index) => (
                                    <li key={index} style={{ padding: 'var(--spacing-sm) 0', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <span style={{ color: 'var(--primary-blue)', fontSize: '1.5rem' }}>✓</span>
                                        <span style={{ fontSize: 'var(--font-size-lg)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cloud & Integrations */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div {...fadeInUp}>
                            <span className="section-label" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>03 - Cloud Solutions</span>
                            <h2 style={{ marginTop: 'var(--spacing-md)' }}>Cloud & Integrations</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)' }}>Scalable infrastructure and seamless third-party integrations</p>
                            <p>Leverage the power of cloud computing with AWS, Firebase, and other leading platforms. We build robust backend systems, APIs, and integrations that scale with your business, ensuring reliability and performance at every stage of growth.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-lg)' }}>
                                {['AWS & Firebase cloud solutions', 'RESTful API development & integration', 'Authentication & user management', 'Database design & optimization'].map((item, index) => (
                                    <li key={index} style={{ padding: 'var(--spacing-sm) 0', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <span style={{ color: 'var(--primary-blue)', fontSize: '1.5rem' }}>✓</span>
                                        <span style={{ fontSize: 'var(--font-size-lg)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="service-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="service-card-image" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                                <span style={{ fontSize: '6rem', position: 'relative', zIndex: 1 }}>☁️</span>
                            </div>
                            <div className="service-card-content">
                                <h3>Cloud Infrastructure</h3>
                                <p>Secure, scalable, and reliable cloud solutions that grow with your business needs and user base.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Consulting & Support */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                        <motion.div
                            className="service-card"
                            style={{ order: 2 }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="service-card-image" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                                <span style={{ fontSize: '6rem', position: 'relative', zIndex: 1 }}>🎯</span>
                            </div>
                            <div className="service-card-content">
                                <h3>Expert Guidance</h3>
                                <p>Strategic consulting to help you make the right technology decisions for your business goals.</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ order: 1 }} {...fadeInUp}>
                            <span className="section-label" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', color: 'white' }}>04 - Consulting</span>
                            <h2 style={{ marginTop: 'var(--spacing-md)' }}>Consulting & Support</h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)' }}>Strategic guidance and ongoing technical support</p>
                            <p>Not sure where to start? We offer consulting services to help you define your product strategy, choose the right technology stack, and plan your development roadmap. Our ongoing support ensures your product continues to perform optimally.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-lg)' }}>
                                {['Product strategy & planning', 'Technical architecture design', 'Code review & optimization', 'Ongoing maintenance & support'].map((item, index) => (
                                    <li key={index} style={{ padding: 'var(--spacing-sm) 0', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <span style={{ color: 'var(--primary-blue)', fontSize: '1.5rem' }}>✓</span>
                                        <span style={{ fontSize: 'var(--font-size-lg)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%)', color: 'var(--white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <h2 style={{ color: 'var(--white)', fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-md)' }}>Ready to Get Started?</h2>
                        <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>Let's discuss your project and find the perfect solution for your needs.</p>
                        <Link to="/contact" className="btn" style={{ background: 'var(--white)', color: 'var(--primary-blue)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>Contact Us Today</Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Services;
