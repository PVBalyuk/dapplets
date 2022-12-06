import { FunctionComponent, memo } from "react";

interface IProps {
  src: string;
  text: string;
}

const NavigationItem: FunctionComponent<IProps> = ({ src, text }) => {
  return (
    <div className="flex h-54px">
      <img className="mr-11px inline-block" src={src} alt="#" />
      <p className="self-center">{text}</p>
    </div>
  );
};

export default memo<IProps>(NavigationItem);
