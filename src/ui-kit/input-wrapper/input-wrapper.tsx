import { FunctionComponent, memo } from "react";

interface IProps {
  children?: React.ReactNode;
}

const InputWrapper: FunctionComponent<IProps> = ({ children }) => {
  return (
    <div className="flex flex-row flex-nowrap items-end justify-between gap-10px">
      {children}
    </div>
  );
};

export default memo<IProps>(InputWrapper);
