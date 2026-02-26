import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import WhyPledge from "./components/sections/WhyPledge";
import Steps from "./components/sections/Steps";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import TermsAndConditions from "./components/sections/TermsAndConditions";
import Distributors from "./components/sections/Distributors";
import Blogs from "./components/sections/Blogs";
import Media from "./components/sections/Media";
import Careers from "./components/sections/Careers";
import AboutUs from "./components/sections/Aboutus";
import PrivacyPolicy from "./components/sections/PrivacyPolicy";
import CallBanner from "./components/sections/CallBanner";
import BookADemo from "./components/sections/BookADemo";
import Loan from "./components/sections/Loan";

import "./styles/global.css";

const HIDE_CHROME_PATHS = ["/distributors", "/blogs", "/media", "/careers", "/about-us"];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <>
      <Hero />
      <Benefits />
      <Steps />
      <WhyPledge />
      <CallBanner />
      <FAQ isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
      <CTA />
    </>
  );
}

function App() {
  const location = useLocation();
  const hideChrome = HIDE_CHROME_PATHS.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!hideChrome && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/distributors" element={<Distributors />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/book-demo" element={<BookADemo />} />
          <Route path="/get-loan" element={<Loan />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </AnimatePresence>
      {!hideChrome && <Footer />}
    </>
  );
}

export default App;
