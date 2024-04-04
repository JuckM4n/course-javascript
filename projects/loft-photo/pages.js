const pagesMap = {
  login: '.page-login',
  main: '.page-main',
  profile: '.page-profile',
};

export default {
  openPage(name) {
    const page = pagesMap[name];
    if (page) {
      for (const pageName in pagesMap) {
        if (pagesMap[pageName] === name) {
          document.querySelector(pagesMap[pageName]).classList.remove('hidden');
        } else {
          document.querySelector(pagesMap[pageName]).classList.add('hidden');
        }
      }
    }
  },
};
