module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/today",
        permanent: true,
      },
    ];
  },
};
