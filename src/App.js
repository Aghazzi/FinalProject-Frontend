import "./App.css";
import { AppContainer, AppContent, Footer, Nav } from "./common/components";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app/AppRouter";
import { AuthProvider } from "./features/auth/store/Context/AuthProvider";

export const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppContainer>
                    <Nav />
                    <AppContent>
                        <AppRouter />
                    </AppContent>
                    <Footer />
                </AppContainer>
            </AuthProvider>
        </BrowserRouter>
    );
};
