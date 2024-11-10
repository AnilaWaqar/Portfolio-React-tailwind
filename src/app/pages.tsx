
// pages/_app.tsx

import Layout from './components/layout';  // Layout component import karein
import '../styles/globals.css';  // Global styles import karein

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <Layout>
      <Component {...pageProps} /> {/* Page-specific content as children pass ho raha hai */}
    </Layout>
  );
}

export default MyApp;
