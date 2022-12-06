import { FunctionComponent } from "react";
import { enGb } from "src/core";
import { Title } from "src/ui-kit";
import { WorkingOnTitle } from "./components";

const WorkingOn: FunctionComponent = () => {
  return (
    <div>
      <Title>{enGb.WORKING_ON}</Title>
      <div className="flex flex-col gap-10px">
        <WorkingOnTitle title={enGb.TWITTER_COM_1} />
        <WorkingOnTitle title={enGb.TWITTER_COM_2} />
        <WorkingOnTitle title={enGb.FACEBOOK_1} />
        <WorkingOnTitle title={enGb.FACEBOOK_2} />
      </div>
    </div>
  );
};

export default WorkingOn;
