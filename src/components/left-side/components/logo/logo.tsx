import { FunctionComponent } from "react";
import logo from "src/assets/logo.svg";
import rightArrow from "src/assets/arrow-right.svg";

const Logo: FunctionComponent = () => {
  return (
    <div className="flex flex-row flex-nowrap">
      <img className="mr-10px inline-block" src={logo} alt="#" />
      <h2 className="mr-auto block self-center text-base font-black text-2A2A2A">
        DAPPLETS PROJECT
        <span className="text-base font-black text-50140">.</span>
      </h2>
      <img src={rightArrow} alt="#" className="mr-5" />
    </div>
  );
};

export default Logo;
