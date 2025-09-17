interface AboutUsPageProps {
    onNavigateToNotFound?: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigateToNotFound }) => {
    return (
        <div className="about-us">
            <div className="about-content">
                <div className="about-hero">
                    <h1 className="about-title">About TaskManager</h1>
                    <p className="about-subtitle">
                        Simplifying productivity, one task at a time
                    </p>
                </div>

                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        At TaskManager, we believe that staying organized shouldn't be complicated.
                        Our mission is to provide a clean, intuitive, and powerful task management
                        experience that helps you focus on what matters most.
                    </p>
                </div>

                                <div className="about-features">
                    <h2>Why Choose TaskManager?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">✨</div>
                            <h3>Clean Design</h3>
                            <p>Beautiful, intuitive interface that keeps you focused</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>Lightning Fast</h3>
                            <p>Responsive and quick, built with modern web technologies</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Mobile Ready</h3>
                            <p>Works perfectly on all devices, from desktop to mobile</p>
                        </div>

                    </div>
                </div>

                <div className="about-cta">
                    <h2>Want to learn more about us?</h2>
                    <p>Discover how we can help you further.</p>
                    <button
                        className="cta-button"
                        onClick={onNavigateToNotFound}
                    >
                        Read more
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;