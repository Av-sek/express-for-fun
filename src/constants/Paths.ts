/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Users: {
    Base: '/users',
    Get: '/all',
    Add: '/add',
    Update: '/update',
    Delete: '/delete/:id',
  },
  Auth: {
    Base: '/auth',
    Login: '/login',
    Register: '/register',
  },
  Products: {
    Base: '/products',
    Get: '/',
    Retrieve: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
  User: {
    Base: '/user',
    Profile: '/profile',
  }
} as const;
