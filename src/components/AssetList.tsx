import { AssetListProps } from "../types";
import AssetContainer from "./AssetContainer";

const AssetList = (props: AssetListProps) => {
  const { assets } = props;

  return (
    <div className="flex flex-wrap justify-center items-center">
      {assets.map((asset) => {
        return <AssetContainer asset={asset} key={asset.symbol} />;
      })}
    </div>
  );
};

export default AssetList;
