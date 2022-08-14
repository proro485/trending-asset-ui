import AssetList from "./components/AssetList";
import assets from "./data/assets";
import { Activity } from "./images/Logo";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="py-8">
        <div className="flex mb-8 ml-9">
          <img src={Activity} alt="Activity Logo" />
          <span className="ml-3 text-base text-default-text">
            Trending Assets
          </span>
        </div>
        <AssetList assets={assets} />
      </div>
    </div>
  );
};

export default App;
