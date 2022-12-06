import { FunctionComponent } from "react";
import { enGb } from "src/core";
import { NavigationItem } from "./components";
import codesandbox from "src/assets/codesandbox.svg";
import heart from "src/assets/heart.svg";
import grid from "src/assets/grid.svg";
import users from "src/assets/users.svg";
import trending from "src/assets/trending.svg";

const NavigationIitems: FunctionComponent = () => {
  return (
    <div className="mt-5 mb-5 flex flex-col gap-30px border-b-2 border-b-white">
      <NavigationItem src={codesandbox} text={enGb.ALL_DEPLETS} />
      <NavigationItem src={heart} text={enGb.EDITORS_CHOICE} />
      <NavigationItem src={grid} text={enGb.ESSENTIAL_DAPPLETS} />
      <NavigationItem src={users} text={enGb.SOCIAL_NETWORKS} />
      <NavigationItem src={trending} text={enGb.FINANCIAL_DAPLETS} />
    </div>
  );
};

export default NavigationIitems;
