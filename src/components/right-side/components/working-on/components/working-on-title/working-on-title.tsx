import { FunctionComponent, memo } from "react";
import redCross from "src/assets/red-cross.svg";

interface IProps {
  title: string;
}

const WorkingOnTitle: FunctionComponent<IProps> = ({ title }) => {
  return (
    <div className="flex h-19px flex-row items-center justify-start">
      <img src={redCross} alt="#" style={{ marginRight: "4px" }} />
      <p className="text-base font-normal text-999999">{title}</p>
    </div>
  );
};

export default memo<IProps>(WorkingOnTitle);
