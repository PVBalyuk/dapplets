import { FunctionComponent } from "react";
import { enGb } from "src/core";
import { Title } from "./components";

const MyLists: FunctionComponent = () => {
  return (
    <div className="flex max-w-290px flex-col gap-5 border-b-1px border-b-white pb-5 text-2A2A2A">
      <h1 className="text-base font-semibold ">My lists</h1>
      <Title text={enGb.TOP_TEN_TWITTER_DAPPLETS} link={enGb.ME} />
      <Title text={enGb.BEST_FINANCIAL_DAPPLETS_BY_JACK} link={enGb.JACK} />
      <Title text={enGb.TOP_TEN_TWITTER_DAPPLETS} link={enGb.ME} />
    </div>
  );
};

export default MyLists;
