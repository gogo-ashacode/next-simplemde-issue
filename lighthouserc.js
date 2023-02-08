module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'sudo yarn dev',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
