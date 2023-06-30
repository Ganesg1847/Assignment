import "./App.css";
import Banner from "./Component/Home/Banner";
import Footer from "./Component/Home/Footer";
import ChoosPlan from "./Component/Home/ChoosPlan";
import AboutCouse from "./Component/Home/AboutCouse";

import Review from "./Component/Home/Review";

function App() {
  return (
    <div>
      <div className="">
        <Banner />
        <AboutCouse />

        <ChoosPlan />
        <Review />

        <Footer />
      </div>
    </div>
  );
}

export default App;
