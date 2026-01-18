import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
};

const Portfolio = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{ padding: '8rem 0 5rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <span className="section-label">Our Work</span>
                        <h1 style={{ maxWidth: '800px', margin: '0 auto' }}>Showcasing Digital Excellence</h1>
                        <p style={{ fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto' }}>Explore the digital products we've built for startups, NGOs, and growing businesses around the world.</p>
                    </motion.div>
                </div>
            </section>

            {/* Mobile Apps Section */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Mobile Applications</span>
                        <h2>Native-Quality Mobile Apps</h2>
                        <p>Built with Flutter for exceptional performance</p>
                    </motion.div>

                    <div className="grid grid-3">
                        {[
                            {
                                badge: 'Mobile App',
                                title: 'Share2Care',
                                desc: 'A community-driven platform connecting volunteers with NGOs and social causes. Features real-time notifications, event management, and impact tracking.',
                                stack: 'Flutter · Firebase · Push Notifications',
                                bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                icon: '🤝'
                            },
                            {
                                badge: 'Mobile App',
                                title: 'HackToFuture',
                                desc: 'Hackathon management app for organizing coding competitions. Includes team formation, project submissions, live leaderboards, and judging panels.',
                                stack: 'Flutter · REST API · Real-time Updates',
                                bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                                icon: '💻'
                            },
                            {
                                badge: 'Mobile App',
                                title: 'Builders Hub',
                                desc: 'Construction project management tool for tracking materials, labor, and timelines. Offline-first architecture for on-site usage without internet.',
                                stack: 'Flutter · SQLite · Cloud Sync',
                                bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                icon: '🏗️'
                            }
                        ].map((item, index) => (
                            <motion.div
                                className="service-card"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="service-card-image" style={{ background: item.bg }}>
                                    <span style={{ fontSize: '5rem', position: 'relative', zIndex: 1 }}>{item.icon}</span>
                                </div>
                                <div className="service-card-content">
                                    <span className="service-badge">{item.badge}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <p style={{ marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
                                        <strong style={{ color: 'var(--text-primary)' }}>Tech Stack:</strong> {item.stack}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Web Platforms Section */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Web Platforms</span>
                        <h2>Powerful Web Applications</h2>
                        <p>Scalable solutions for modern businesses</p>
                    </motion.div>

                    <div className="grid grid-3">
                        {[
                            {
                                badge: 'Web Platform',
                                badgeStyle: { background: 'rgba(250, 112, 154, 0.1)', color: '#fa709a' },
                                title: 'ZQ Track',
                                desc: 'Comprehensive quality tracking system for manufacturing. Features defect logging, analytics dashboards, and automated reporting for quality control teams.',
                                stack: 'PHP · MySQL · Chart.js · Bootstrap',
                                bg: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                                icon: '📊'
                            },
                            {
                                badge: 'Web Platform',
                                badgeStyle: { background: 'rgba(168, 237, 234, 0.3)', color: '#00a8a8' },
                                title: 'Library Management System',
                                desc: 'Complete library solution with book cataloging, member management, borrowing system, and fine calculations. Includes admin panel and member portal.',
                                stack: 'PHP · MySQL · JavaScript · Responsive Design',
                                bg: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                                icon: '📚'
                            },
                            {
                                badge: 'Web Platform',
                                badgeStyle: { background: 'rgba(255, 154, 158, 0.2)', color: '#ff6b6b' },
                                title: 'Fee Receipt Generator',
                                desc: 'Automated fee collection and receipt generation system for educational institutions. Supports multiple payment modes and generates PDF receipts.',
                                stack: 'PHP · MySQL · PDF Generation · Payment Gateway',
                                bg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                                icon: '🧾'
                            }
                        ].map((item, index) => (
                            <motion.div
                                className="service-card"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="service-card-image" style={{ background: item.bg }}>
                                    <span style={{ fontSize: '5rem', position: 'relative', zIndex: 1 }}>{item.icon}</span>
                                </div>
                                <div className="service-card-content">
                                    <span className="service-badge" style={item.badgeStyle}>{item.badge}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <p style={{ marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
                                        <strong style={{ color: 'var(--text-primary)' }}>Tech Stack:</strong> {item.stack}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section style={{ background: 'var(--white)' }}>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Technologies</span>
                        <h2>Our Tech Stack</h2>
                        <p>Modern tools and frameworks for building robust solutions</p>
                    </motion.div>

                    <div className="grid grid-4">
                        {[
                            { icon: '📱', title: 'Flutter', desc: 'Cross-platform mobile development' },
                            { icon: '🔥', title: 'Firebase', desc: 'Backend & real-time database' },
                            { icon: '☁️', title: 'AWS', desc: 'Cloud infrastructure & hosting' },
                            { icon: '🐘', title: 'PHP & MySQL', desc: 'Web development & databases' }
                        ].map((item, index) => (
                            <motion.div
                                className="card"
                                style={{ textAlign: 'center' }}
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)' }}>{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%)', color: 'var(--white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <h2 style={{ color: 'var(--white)', fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-md)' }}>Want to See Your Project Here?</h2>
                        <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>Let's collaborate to build something amazing together. Start your project today.</p>
                        <Link to="/contact" className="btn" style={{ background: 'var(--white)', color: 'var(--primary-blue)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>Start Your Project</Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
