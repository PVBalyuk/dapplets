import "./App.css";
// import { Axes } from "./components";
import classes from "./app.module.css";
import { LeftSide, MiddleSide, RightSide } from "./components";

function App() {
  // return <Axes />;
  return (
    <div className="flex w-full flex-row flex-nowrap justify-between gap-0 bg-background-image">
      <LeftSide />
      <MiddleSide />
      <RightSide />
    </div>
  );
}

export default App;
