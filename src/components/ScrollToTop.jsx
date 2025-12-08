// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation(); // React Router hook

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
    }, [pathname]);

    return null;
};

export default ScrollToTop;
