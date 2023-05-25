import React from "react";
import {
    ContactForm,
    HeroSection,
    OrgContent,
    Stats,
    VolContent,
} from "../components";

export const HomePageLanding = () => {
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
