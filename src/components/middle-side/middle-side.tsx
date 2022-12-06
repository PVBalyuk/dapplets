import { FunctionComponent } from "react";
import { Header, Content } from "./components";
// import { getAllDapplets } from "src/store/reducers/dapplets/dapplets-slice";

const MiddleSide: FunctionComponent = () => {
  // useEffect(() => {
  //   dispatch(getAllDapplets({ start: 0, direction: "ASC", search: "a" }));
  // }, [dispatch]);

  return (
    <div className="flex-grow-2">
      <Header />
      <Content />
    </div>
  );
};

export default MiddleSide;
