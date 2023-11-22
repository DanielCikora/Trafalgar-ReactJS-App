import Banner from '../Banner';
import Services from '../Services';
import Providers from '../Providers';
import Downloads from '../Downloads';
import Slider from '../Slider';
import Article from '../Article';
import Footer from '../Footer';
export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Providers />
      <Downloads />
      <Slider />
      <Article />
      <Footer />
    </main>
  );
}
