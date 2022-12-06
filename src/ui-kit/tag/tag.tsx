import { FunctionComponent, memo } from "react";
import cross from "src/assets/cross.svg";

export enum Color {
  "purple" = "#5241BF",
  "green" = "#41BFB0",
}

interface IProps {
  name?: string;
  color?: Color;
}

const Tag: FunctionComponent<IProps> = ({ name, color = Color.purple }) => {
  return (
    <div
      className="inline-flex  flex-row justify-between rounded pt-3px pr-3px pb-3px pl-3px"
      style={{
        backgroundColor: color,
      }}
    >
      <span className="mr-1 align-middle text-tag font-medium text-white">
        {name}
      </span>
      <img
        className="self-center"
        src={cross}
        alt="#"
        width="5px"
        height="5px"
      />
    </div>
  );
};

export default memo<IProps>(Tag);
