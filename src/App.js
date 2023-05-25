import "./App.css";
import Banner from "./Component/Home/Banner";
import Footer from "./Component/Home/Footer";
import MineToMill from "./Component/Home/MineToMill";
import MineralProcessing from "./Component/Home/MineralProcessing";
import Navbar from "./Component/Home/Navbar";
import OilAndGas from "./Component/Home/OilAndGas";
import OnclickTop from "./Component/Home/OnclickTop";
import Sustainability from "./Component/Home/Sustainability";

function App() {
  return (
    <div>
      <div className="space-y-14">
        <Banner />
        <MineToMill />
        <Sustainability />
        <MineralProcessing />
        <OilAndGas />
        <Footer />
      </div>
      <OnclickTop />
    </div>
  );
}

export default App;
