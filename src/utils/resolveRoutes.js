const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === '/' ? route : '/:id';
    return validRoute;
  }else if(route === '/home') {
    let validRoute = route === '/home' ? route : '/:id';
    return validRoute;
  }
  return `/${route}`; 
};

export default resolveRoutes;