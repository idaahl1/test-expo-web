interface AboutUsProps {
  onNavigateToTasks?: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onNavigateToTasks }) => {
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

        <div className="about-section">
          <h2>What We Do</h2>
          <p>
            We've created a beautiful, modern todo application that combines simplicity 
            with functionality. Whether you're managing personal tasks, work projects, 
            or team collaborations, TaskManager provides the tools you need to stay 
            productive and organized.
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
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Productivity Focused</h3>
              <p>Smart features to help you get things done efficiently</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            TaskManager was born from the need for a simple, elegant task management 
            solution. We noticed that existing tools were either too complex or too 
            basic. So we set out to create the perfect balance - powerful enough for 
            serious productivity, yet simple enough for anyone to use.
          </p>
        </div>

        <div className="about-team">
          <h2>Built with ❤️</h2>
          <p>
            TaskManager is crafted by a passionate team of developers and designers 
            who understand the importance of good productivity tools. We're constantly 
            working to improve and add new features based on user feedback.
          </p>
        </div>

        <div className="about-cta">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of users who have made TaskManager their go-to productivity tool.</p>
          <button 
            className="cta-button"
            onClick={onNavigateToTasks}
          >
            Start Managing Your Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;