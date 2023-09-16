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
  Products: {
    Base: '/products',
    Get: '/',
    Retrieve: '/:id',
    Add: '/',
    Update: '/:id',
    Delete: '/:id',
  },
} as const;
