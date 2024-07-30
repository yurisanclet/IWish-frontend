/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true, // ou false se o redirecionamento não for permanente
      },
    ]
  },
};

export default nextConfig;
