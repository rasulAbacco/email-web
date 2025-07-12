import React from "react";
import "../styles/landingPage.css";
import heroImg from "../assets/hero-3d.png";
import { Link } from "react-router-dom";
import {
    FaMagic,
    FaUsers,
    FaChartLine,
    FaLightbulb,
    FaRobot,
} from "react-icons/fa";

const LandingPage = () => (
    <div className="landing-page">
        <header className="landing-header">
            <h1 className="landing-logo">EmailAI Pro</h1>
            <nav className="landing-nav">
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/about">About</Link>
                <Link to="/integrations">Integrations</Link>
                <Link to="/login" className="btn-link">Login</Link>
                <Link to="/signup" className="btn-primary">Get Started</Link>
            </nav>
        </header>

        <main className="landing-main">
            <div className="landing-content">
                <h2 className="landing-title">AI‑Driven Campaigns, Smarter Growth</h2>
                <p className="landing-subtitle">
                    Automate, personalize, and optimize your email marketing with our AI-powered tools.
                </p>
                <Link to="/signup" className="btn-cta">Start Free Trial</Link>
            </div>
            <div className="landing-visual">
                <img src={heroImg} alt="Hero" className="animate-float" />
            </div>
        </main>

        <section className="landing-features">
            <h3 className="section-title">Get started in 3 simple steps</h3>
            <div className="feature-grid">
                <div className="feature-card hover-up">
                    <FaLightbulb className="feature-icon" />
                    <h4>Brainstorm</h4>
                    <p>Generate campaign ideas with AI suggestion prompts.</p>
                </div>
                <div className="feature-card hover-up">
                    <FaUsers className="feature-icon" />
                    <h4>Connect</h4>
                    <p>Import contacts and segment with ease.</p>
                </div>
                <div className="feature-card hover-up">
                    <FaMagic className="feature-icon" />
                    <h4>Automate</h4>
                    <p>Schedule workflows and real-time triggers.</p>
                </div>
            </div>
        </section>

        <section className="landing-howitworks">
            <h3 className="section-title">How It Works</h3>
            <div className="how-grid">
                <div className="how-step">
                    <span className="how-number">1</span>
                    <div>
                        <h4>Connect Your Data</h4>
                        <p>Import via CSV, Google Sheets, or integrations like Shopify & Zapier.</p>
                    </div>
                </div>
                <div className="how-step">
                    <span className="how-number">2</span>
                    <div>
                        <h4>Build Your Flow</h4>
                        <p>Drag-and-drop campaign builder powered by AI suggestions.</p>
                    </div>
                </div>
                <div className="how-step">
                    <span className="how-number">3</span>
                    <div>
                        <h4>Launch & Optimize</h4>
                        <p>Send your campaign and monitor performance in real time.</p>
                    </div>
                </div>
            </div>
        </section>


        <section className="landing-animation-cta">
            <div>
                <h3>Ready to launch smarter campaigns?</h3>
                <Link to="/signup" className="btn-cta">Get Started Now</Link>
            </div>
        </section>

        <section className="landing-faq">
            <h3>Frequently Asked Questions</h3>
            <details>
                <summary>Does it support integrations?</summary>
                Yes — connect Shopify, Zapier, Google Sheets & more.
            </details>
            <details>
                <summary>How does AI help optimize?</summary>
                It suggests subject lines, timings, and audience segments.
            </details>
            <details>
                <summary>Is there a free trial?</summary>
                Yes, a 14-day free trial — no credit card required.
            </details>
        </section>

        <footer className="landing-footer">
            <p>© {new Date().getFullYear()} EmailAI Pro. All rights reserved.</p>
        </footer>
    </div>
);

export default LandingPage;

