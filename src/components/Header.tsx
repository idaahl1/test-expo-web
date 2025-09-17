import { useState } from 'react';

interface HeaderProps {
  currentPage: 'tasks' | 'about';
  onNavigate: (page: 'tasks' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: 'tasks' | 'about', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setIsMenuOpen(false);
  };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h2>📋 TaskManager</h2>
                </div>
                <nav className="nav">
                    <div className="nav-links">
                        <a 
                            href="#" 
                            className={`nav-link ${currentPage === 'tasks' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick('tasks', e)}
                        >
                            Tasks
                        </a>
                        <a 
                            href="#" 
                            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick('about', e)}
                        >
                            About us
                        </a>
                    </div>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </button>
                </nav>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <a 
                        href="#" 
                        className={`mobile-nav-link ${currentPage === 'tasks' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick('tasks', e)}
                    >
                        Tasks
                    </a>
                    <a 
                        href="#" 
                        className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick('about', e)}
                    >
                        About us
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;