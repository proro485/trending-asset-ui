import { LogoContainerProps } from "../types";

const LogoContainer = (props: LogoContainerProps) => {
  return (
    <div className="absolute bg-transparent -top-16 left-24 border-b-px border-b-border-color-1 rounded-full z-10">
      <div className="rounded-full border-[10px] border-primary">
        <div
          className={`cutout cutout-${props.symbol} backdrop-blur-100 h-24 w-24 flex justify-center items-center rounded-full border-t-px border-border-color-1`}
        >
          <img src={props.logo} alt="" className="h-12 w-12" />
        </div>
      </div>
    </div>
  );
};

export default LogoContainer;
