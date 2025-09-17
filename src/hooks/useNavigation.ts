import { useState } from 'react';

export type Page = 'userinfo' | 'tasks' | 'about' | 'notfound';

export const useNavigation = (initialPage: Page = 'userinfo') => {
  const [currentPage, setCurrentPage] = useState<Page>(initialPage);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const navigateToTasks = () => navigateTo('tasks');
  const navigateToAbout = () => navigateTo('about');
  const navigateToUserInfo = () => navigateTo('userinfo');
  const navigateToNotFound = () => navigateTo('notfound');

  return {
    currentPage,
    navigateTo,
    navigateToTasks,
    navigateToAbout,
    navigateToUserInfo,
    navigateToNotFound,
  };
};