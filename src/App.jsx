import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import About from "./Components/Pages/About";
import ContactUs from './Components/Pages/ContactUs'
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
