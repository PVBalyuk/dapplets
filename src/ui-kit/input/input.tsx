import { ChangeEventHandler, FunctionComponent, memo } from "react";

interface IProps {
  label?: string;
  type?: string;
  id: string;
  inputLabel: string;
  maxWidth?: string;
  withAdditionalLabel?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input: FunctionComponent<IProps> = ({
  label,
  type = "text",
  id,
  inputLabel,
  maxWidth = "187px",
  withAdditionalLabel = true,
  onChange,
}) => {
  return (
    <div className=" w-full">
      {withAdditionalLabel && (
        <p className="mb-10px items-center text-base font-medium text-999999">
          {label}
        </p>
      )}
      <input
        onChange={onChange}
        prefix="adasd"
        placeholder={inputLabel}
        type={type}
        id={id}
        className="h-10 w-full rounded-10px border-none bg-gradient-to-b from-left-bar-from to-left-bar-to pl-10px text-base font-normal text-2A2A2A shadow-input-shadow"
        style={{
          maxWidth,
        }}
      />
    </div>
  );
};

export default memo<IProps>(Input);
