import dynamic from 'next/dynamic';
import Layout from '../components/layout'
import HomePage from './home';

const ShepherdTour = dynamic(() => import('./tour'), { ssr: false });

console.log('🐙', ShepherdTour);

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
