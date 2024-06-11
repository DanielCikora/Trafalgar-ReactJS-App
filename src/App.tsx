import LazyLoad from "./components/micro-components/LazyLoad";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Providers from "./components/Providers";
import Downloads from "./components/Downloads";
import Slider from "./components/Slider";
import Article from "./components/Article";
import AboutUs from "./components/pages/AboutUs";
import Apps from "./components/pages/Apps";
import FindDoctor from "./components/pages/FindDoctor";
import NoPage from "./components/pages/NoPage";
import Testimonials from "./components/pages/Testimonials";
export default function App() {
  return (
    <BrowserRouter>
      <LazyLoad>
        <Navigation />
        <Routes>
          <Route
            index
            element={
              <>
                <Banner />
                <Services />
                <Providers />
                <Downloads />
                <Slider />
                <Article />
              </>
            }
          />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Apps' element={<Apps />} />
          <Route path='FindDoctor' element={<FindDoctor />} />
          <Route path='Testimonials' element={<Testimonials />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        <Footer />
      </LazyLoad>
    </BrowserRouter>
  );
}
