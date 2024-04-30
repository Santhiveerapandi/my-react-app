import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function Header() {
    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                            
                        />
                        <Route
                        path="/about"
                        element={<About />}
                        />
                    </Routes>
                    
                </BrowserRouter>
                { /* <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>*/ }
            </nav>
            <hr/>
        </header>
    );
}

export default Header