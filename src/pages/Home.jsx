import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
};

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-grid">
                        <motion.div
                            className="hero-content"
                            {...fadeInUp}
                        >
                            <h1>IT <span className="highlight">Solutions</span> for your Business</h1>
                            <p>We build simple, powerful digital products that help growing businesses succeed. From mobile apps to web platforms and cloud solutions, we're your trusted technology partner.</p>
                            <div className="hero-buttons">
                                <Link to="/contact" className="btn btn-primary">Learn More</Link>
                                {/* <a href="#" className="btn-play">
                                    <span className="btn-play-icon"></span>
                                    Watch Video
                                </a> */}
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-image-wrapper"
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="hero-shape">
                                <img src="/assets/images/hero-team.png" alt="Professional team collaboration" />
                            </div>
                            <div className="hero-decoration"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats">
                <div className="container">
                    <div className="stats-grid">
                        {[
                            { number: '5+', label: 'Years Experience' },
                            { number: '15+', label: 'Projects Completed' },
                            { number: '100%', label: 'Client Satisfaction' },
                            { number: '24/7', label: 'Support Available' }
                        ].map((stat, index) => (
                            <motion.div
                                className="stat-item"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Our Services</span>
                        <h2>What We Offer</h2>
                        <p>Comprehensive digital solutions tailored to your business needs</p>
                    </motion.div>

                    <div className="grid grid-3">
                        {[
                            { icon: '📱', title: 'Mobile App Development', desc: 'Native-quality Android & iOS apps built with Flutter for seamless performance across platforms. Beautiful interfaces that users love.' },
                            { icon: '💻', title: 'Web & Platform Development', desc: 'Modern websites, dashboards, and admin panels designed for usability and performance. Responsive and fast-loading solutions.' },
                            { icon: '☁️', title: 'Cloud & Integrations', desc: 'Scalable cloud solutions with AWS, Firebase, API integrations, and secure authentication. Built to grow with your business.' },
                            { icon: '🎯', title: 'Consulting & Support', desc: 'Strategic guidance for your digital projects. From architecture planning to ongoing maintenance and optimization.' },
                            { icon: '🔒', title: 'Security & Quality', desc: 'Clean, secure code with best practices baked in. Regular testing and quality assurance for reliable products.' },
                            { icon: '⚡', title: 'Performance Optimization', desc: 'Fast, efficient applications that deliver exceptional user experiences. Continuous monitoring and improvement.' }
                        ].map((service, index) => (
                            <motion.div
                                className="card"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="card-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Why Choose Us</span>
                        <h2>Your Trusted Digital Partner</h2>
                        <p>We combine technical excellence with business understanding</p>
                    </motion.div>

                    <div className="grid grid-2" style={{ gap: '3rem' }}>
                        <motion.div {...fadeInUp}>
                            <h3 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-lg)' }}>Building Digital Products That Make a Difference</h3>
                            <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-md)' }}>With over 5 years of experience, we've helped startups, NGOs, and growing businesses bring their digital visions to life.</p>
                            <p>Our approach combines clean code, user-friendly design, and transparent communication. Every project receives the same attention to detail, regardless of size or budget.</p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: 'var(--spacing-lg)' }}>
                                {[
                                    'Quality-focused development',
                                    'Transparent communication',
                                    'On-time delivery',
                                    'Ongoing support & maintenance'
                                ].map((item, index) => (
                                    <li key={index} style={{ padding: 'var(--spacing-sm) 0', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                                        <span style={{ color: 'var(--primary-blue)', fontSize: '1.5rem' }}>✓</span>
                                        <span style={{ fontSize: 'var(--font-size-lg)' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <div className="grid grid-2" style={{ gap: 'var(--spacing-md)' }}>
                            {[
                                { icon: '🎯', title: 'Results Focused', desc: 'Every feature serves a clear business purpose' },
                                { icon: '✨', title: 'User-Friendly', desc: 'Intuitive interfaces users love' },
                                { icon: '🔒', title: 'Secure Code', desc: 'Security best practices from day one' },
                                { icon: '💡', title: 'Innovation', desc: 'Latest tech, practical solutions' }
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
                                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>{item.icon}</div>
                                    <h4>{item.title}</h4>
                                    <p style={{ fontSize: 'var(--font-size-sm)' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <div className="container">
                    <motion.div className="section-header" {...fadeInUp}>
                        <span className="section-label">Testimonials</span>
                        <h2>What Our Clients Say</h2>
                        <p>Trusted by startups, NGOs, and growing businesses</p>
                    </motion.div>

                    <div className="grid grid-3">
                        {[
                            // {
                            //     quote: "Ash Designs transformed our idea into a beautiful, functional mobile app. Their attention to detail is outstanding.",
                            //     name: "Sarah Johnson",
                            //     role: "Founder, TechStart Inc.",
                            //     initials: "SJ",
                            //     color: "var(--primary-blue)"
                            // },
                            {
                                quote: "Working with Ash Designs was a pleasure. They delivered on time, within budget, and exceeded expectations.",
                                name: "Mehaboob",
                                role: "Director, Zahrathul Quran Hifz College",
                                initials: "M",
                                color: "var(--accent-cyan)"
                            },
                            // {
                            //     quote: "Professional, reliable, and incredibly talented. Our go-to partner for all digital projects.",
                            //     name: "Priya Sharma",
                            //     role: "CTO, DataFlow Solutions",
                            //     initials: "PS",
                            //     color: "var(--accent-teal)"
                            // }
                        ].map((item, index) => (
                            <motion.div
                                className="card"
                                key={index}
                                {...fadeInUp}
                                transition={{ delay: index * 0.1 }}
                            >
                                <p style={{ fontSize: 'var(--font-size-lg)', fontStyle: 'italic', marginBottom: 'var(--spacing-lg)', color: 'var(--text-primary)' }}>"{item.quote}"</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                                    <div style={{ width: '50px', height: '50px', background: item.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700 }}>{item.initials}</div>
                                    <div>
                                        <p style={{ fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>{item.name}</p>
                                        <p style={{ fontSize: 'var(--font-size-sm)', margin: 0, color: 'var(--text-muted)' }}>{item.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%)', color: 'var(--white)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <motion.div {...fadeInUp}>
                        <h2 style={{ color: 'var(--white)', fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-md)' }}>Ready to Build Something Amazing?</h2>
                        <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 'var(--font-size-xl)', maxWidth: '700px', margin: '0 auto var(--spacing-xl)' }}>Let's turn your vision into reality. Get in touch today for a free consultation and discover how we can help your business grow.</p>
                        <Link to="/contact" className="btn" style={{ background: 'var(--white)', color: 'var(--primary-blue)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>Get Started Today</Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
