import { FunctionComponent } from "react";
import network from "src/assets/network.svg";
import settings from "src/assets/settings.svg";

const Header: FunctionComponent = () => {
  return (
    <div
      className="flex h-56px flex-row items-center justify-between border-2px border-white bg-gradient-to-b pt-0 pb-0 pr-86px pl-5 backdrop-blur-lg"
      style={{
        background:
          "linear-gradient(180deg, rgba(185, 251, 255, 0.2) 0%, rgba(227, 220, 255, 0.2) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.3)",
      }}
    >
      <div className="flex">
        <img className="mr-10px" src={network} alt="#" />
        <p className="text-base font-normal text-BBBBBB">
          Extension state: <span className="text-62BD6B">Active</span>
        </p>
      </div>
      <div className="flex">
        <img className="mr-10px" src={settings} alt="#" />
        <p className="text-base font-medium text-565555">Settings</p>
      </div>
    </div>
  );
};

export default Header;
