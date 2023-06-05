import React, { useEffect } from "react";
import {
    ContactForm,
    HeroSection,
    OrgContent,
    Stats,
    VolContent,
} from "../components";
import { useLocation } from "react-router-dom";

export const HomePageLanding = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.hash === "#contactform") {
            window.scrollTo({
                top: 3200,
                behavior: "smooth",
            });
        }
    }, [location]);
    return (
        <div>
            <HeroSection />
            <OrgContent />
            <Stats />
            <VolContent />
            <ContactForm />
        </div>
    );
};
