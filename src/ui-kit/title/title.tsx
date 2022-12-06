import { FunctionComponent } from "react";

interface IProps {
  children: React.ReactNode;
}

const Title: FunctionComponent<IProps> = ({ children }) => {
  return (
    <h1 className="text-2xl font-semibold uppercase text-2A2A2A">{children}</h1>
  );
};

export default Title;
