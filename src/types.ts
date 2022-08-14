export type Asset = {
  name: string;
  symbol: string;
  logo: string;
  price: number;
  tvl: number;
  percentChange: number;
  popularPairs: string[];
};

export type AssetListProps = {
  assets: Asset[];
};

export type AssetContainerProps = {
  asset: Asset;
};

export type LogoContainerProps = {
  logo: string;
  symbol: string;
};

export type PriceContainerProps = {
  price: number;
  percentChange: number;
};
