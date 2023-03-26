import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Apps from "./components/pages/Apps";
import FindDoctor from "./components/pages/FindDoctor";
import NoPage from "./components/pages/NoPage";
import Testimonials from "./components/pages/Testimonials";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='Apps' element={<Apps />} />
            <Route path='FindDoctor' element={<FindDoctor />} />
            <Route path='Testimonials' element={<Testimonials />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
