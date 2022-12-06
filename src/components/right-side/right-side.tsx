import { FunctionComponent } from "react";
import arrowLeft from "src/assets/arrow-left.svg";
import {
  CommunityTags,
  DappletSettings,
  MyTags,
  WorkingOn,
} from "./components";

const RigthSide: FunctionComponent = () => {
  return (
    <div className="flex max-w-320px flex-grow flex-col gap-30px border-l-2 border-l-white bg-gradient-to-b from-left-bar-from to-left-bar-to pl-5 pr-5 pb-5 pt-87px backdrop-blur-lg">
      <img width={16} height={16} src={arrowLeft} alt="#" />
      <DappletSettings />
      <MyTags />
      <CommunityTags />
      <WorkingOn />
    </div>
  );
};

export default RigthSide;
