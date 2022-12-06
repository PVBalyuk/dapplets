import { FunctionComponent, memo } from "react";

interface IProps {
  text: string;
  link: string;
}

const Title: FunctionComponent<IProps> = ({ text, link }) => {
  return (
    <div>
      <h2 className="text-base font-normal text-565555">
        {text}(
        <span className="text-0085FF underline decoration-0085FF decoration-solid">
          {link}
        </span>
        )
      </h2>
    </div>
  );
};

export default memo<IProps>(Title);
