import { AssetContainerProps } from "../types";
import LogoContainer from "./LogoContainer";
import PriceContainer from "./PriceContainer";

const AssetContainer = (props: AssetContainerProps) => {
  const { asset } = props;

  return (
    <div className="relative mx-8 mt-20">
      <LogoContainer logo={asset.logo} symbol={asset.symbol} />
      <div className="relative bg-gradient-to-t from-bg-color-1 to-bg-color-2 backdrop-blur-100 h-[390px] w-80 flex flex-col items-center rounded-3xl">
        <div className="border-gradient absolute h-full w-full"></div>
        <div className="mt-[72px] text-primary-text text-xs z-20 font-semibold">
          {asset.name} ({asset.symbol})
        </div>
        <PriceContainer
          price={asset.price}
          percentChange={asset.percentChange}
        />
        <div className="mt-2">
          <span className="text-xs text-secondary-text">Price</span>
        </div>
        <div className="border-t-px border-border-color-1 rounded-3xl mx-5 mt-3 py-3 w-[85%] flex justify-center items-center bg-primary text-default-text text-base">
          <span className="mr-4">${asset.tvl.toLocaleString()}</span>
        </div>
        <div className="mt-2">
          <span className="text-xs text-secondary-text">TVL</span>
        </div>
        <div className="border-t-px border-border-color-1 relative rounded-3xl mt-4 py-3 w-2/5 flex justify-evenly items-center bg-primary text-default-text text-base">
          {asset.popularPairs.map((logo) => {
            return <img src={logo} key={logo} alt="" className="h-6 w-6" />;
          })}
        </div>
        <div className="mt-1">
          <span className="text-xs text-secondary-text">Popular Pairs</span>
        </div>
      </div>
    </div>
  );
};

export default AssetContainer;
