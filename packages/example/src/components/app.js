import dynamic from 'next/dynamic';
import Layout from '@components/layout'
import HomePage from '@components/home';

const ShepherdTour = dynamic(() => import('./tour'), { ssr: false });

export default function App() {
  if (!ShepherdTour) return null;

  return (
    <Layout>
      <ShepherdTour>
        <HomePage />
      </ShepherdTour>
    </Layout>
  );
}
