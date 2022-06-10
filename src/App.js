import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Ios from "./components/Ios";
import Ipados from "./components/Ipados";
import MacbookAir from "./components/MacbookAir";
import MacbookPro from "./components/MacbookPro";
import NavigationBar from "./components/NavigationBar";
import Ventura from "./components/Ventura";
import Watchos from "./components/Watchos";

function App() {
    return (
        <>
            <NavigationBar />
            <HeroSection />
            <MacbookAir />
            <Ios />
            <Ventura />
            <Ipados />
            <Watchos />
            <MacbookPro />
            <Footer /> 
        </>
    );
}

export default App;
