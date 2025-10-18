import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import WhyInvestDubai from "./pages/WhyInvestDubai";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import PageTransition from "./components/PageTransition";
import NotFoundPage from "./components/NotFoundPage";
import DraggableSocialMenu from "./components/DraggableSocialMenu";

// Import service pages
import OffPlanPropertyManagement from "./pages/ServicesPages/OffPlanPropertyManagement";
import PropertyManagement from "./pages/ServicesPages/PropertyManagement";
import BuyingSelling from "./pages/ServicesPages/BuyingSelling";
import LeasingServices from "./pages/ServicesPages/LeasingServices";
import ProjectSalesMarketing from "./pages/ServicesPages/ProjectSalesMarketing";
import ProductDesign from "./pages/ServicesPages/ProductDesign";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <main>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/our-team"
              element={
                <PageTransition>
                  <Team />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <Services />
                </PageTransition>
              }
            />
            <Route
              path="/why-invest-in-dubai"
              element={
                <PageTransition>
                  <WhyInvestDubai />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />

            {/* Service Pages Routes */}
            <Route
              path="/services/off-plan-property-management"
              element={
                <PageTransition>
                  <OffPlanPropertyManagement />
                </PageTransition>
              }
            />
            <Route
              path="/services/property-management"
              element={
                <PageTransition>
                  <PropertyManagement />
                </PageTransition>
              }
            />
            <Route
              path="/services/buying-selling"
              element={
                <PageTransition>
                  <BuyingSelling />
                </PageTransition>
              }
            />
            <Route
              path="/services/leasing"
              element={
                <PageTransition>
                  <LeasingServices />
                </PageTransition>
              }
            />
            <Route
              path="/services/project-sales-marketing"
              element={
                <PageTransition>
                  <ProjectSalesMarketing />
                </PageTransition>
              }
            />
            <Route
              path="/services/product-design"
              element={
                <PageTransition>
                  <ProductDesign />
                </PageTransition>
              }
            />

            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFoundPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
        <DraggableSocialMenu />
      </main>
    </>
  );
};

export default App;