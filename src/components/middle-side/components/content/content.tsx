import { FunctionComponent } from "react";
import { Inputs, Dapplets } from "./components";

const Content: FunctionComponent = () => {
  return (
    <div className="mt-76px mr-70px ml-70px h-full bg-gradient-to-b from-left-bar-from to-left-bar-to backdrop-blur-md">
      <Inputs />
      <Dapplets />
    </div>
  );
};

export default Content;
