import { FunctionComponent, memo } from "react";

interface IProps {
  text: string;
}

const CreateButton: FunctionComponent<IProps> = ({ text }) => {
  return (
    <div className="flex h-40px w-83px content-center items-center justify-center rounded-10px bg-0085FF">
      <span className="items-center text-center text-xs font-medium uppercase text-white">
        {text}
      </span>
    </div>
  );
};

export default memo<IProps>(CreateButton);
