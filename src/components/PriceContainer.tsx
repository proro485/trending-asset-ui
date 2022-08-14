import * as math from "mathjs";
import { PriceContainerProps } from "../types";

const PriceContainer = (props: PriceContainerProps) => {
  const getPrice = () => {
    return props.price >= 1
      ? props.price.toLocaleString(undefined, { minimumFractionDigits: 2 })
      : math.bignumber(props.price).toFixed();
  };

  return (
    <div className="border-t-px border-border-color-1 relative rounded-3xl mx-5 mt-4 py-3 w-[85%] flex justify-center items-center bg-primary text-default-text text-base">
      <span className="mr-4">${getPrice()}</span>
      <span
        className={`absolute right-4 text-xs ${
          props.percentChange >= 0 ? "text-profit" : "text-loss"
        }`}
      >
        {props.percentChange}%
      </span>
    </div>
  );
};

export default PriceContainer;
