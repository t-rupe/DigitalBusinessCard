import Info from "./Info";
import AboutComp from "./About";
import Interests from "./Interests";
import Footer   from "./Footer";
function Inner() {
    return ( 
        <div className="flex-column items-center justify-center py-10">
            <Info />
            <AboutComp />
            <Interests />
            <Footer />
        </div>

     );
}

export default Inner;