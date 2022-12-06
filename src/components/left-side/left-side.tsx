import { FunctionComponent } from "react";
import { Logo, MyLists, NavigationItems, MyTags } from "./components";

const LeftSide: FunctionComponent = () => {
  return (
    <div className="flex max-w-360px flex-grow flex-col border-r-2 border-r-white bg-gradient-to-b from-left-bar-from to-left-bar-to pt-77px pr-0 pl-12 backdrop-blur-lg">
      <Logo />
      <NavigationItems />
      <MyLists />
      <MyTags />
    </div>
  );
};

export default LeftSide;
