/**
 * Express router paths go here.
 */


export default {
  Base: '/api',
  Comments: {
    Base: '/comments',
    Get: '/all',
    Add: '/add',
    Update: '/update/:id',
    Delete: '/delete/:id',
  }
} as const;
