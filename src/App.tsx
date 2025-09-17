import './App.css'
import Header from './components/Header'
import { TasksPage, AboutUsPage, UserInfoPage, NotFoundPage } from './pages'
import { useNavigation } from './hooks/useNavigation'
import { APP_CONFIG } from './constants'

function App() {
  const { currentPage, navigateTo, navigateToNotFound, navigateToUserInfo } = useNavigation(APP_CONFIG.defaultPage);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'tasks':
        return <TasksPage />;

      case 'about':
        return <AboutUsPage onNavigateToNotFound={navigateToNotFound} />;

      case 'userinfo':
        return <UserInfoPage />;

      case 'notfound':
        return <NotFoundPage onNavigateHome={navigateToUserInfo} />;

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      {renderCurrentPage()}
    </div>
  );
}

export default App
