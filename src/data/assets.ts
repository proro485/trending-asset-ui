import { BTC, BUSD, ETH, SHIB, SOL } from "../images/Logo";
import { Asset } from "../types";

const assets: Asset[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    logo: BTC,
    price: 31812.8,
    percentChange: 10,
    tvl: 60000,
    popularPairs: [SOL, ETH, BUSD],
  },
  {
    name: "Solana",
    symbol: "SOL",
    logo: SOL,
    price: 32.83,
    percentChange: -12.32,
    tvl: 60000,
    popularPairs: [BTC, ETH, BUSD],
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    logo: ETH,
    price: 1466.45,
    percentChange: -11.93,
    tvl: 60000,
    popularPairs: [SOL, BTC, BUSD],
  },
  {
    name: "Binance USD",
    symbol: "BUSD",
    logo: BUSD,
    price: 1.0,
    percentChange: 0.26,
    tvl: 60000,
    popularPairs: [SOL, ETH, BUSD],
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    logo: SHIB,
    price: 0.00000001948,
    percentChange: -8.1,
    tvl: 60000,
    popularPairs: [SOL, ETH, BUSD],
  },
];

export default assets;
