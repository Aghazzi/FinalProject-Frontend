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
        <div
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <HeroSection />
            <OrgContent />
            <Stats />
            <VolContent />
            <ContactForm />
        </div>
    );
};
