import "./App.css";
import { AppContainer, AppContent, Footer, Nav } from "./common/components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app/AppRouter";

export const App = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <Nav />
                <AppContent>
                    <AppRouter />
                </AppContent>
                <Footer />
            </AppContainer>
        </BrowserRouter>
    );
};
