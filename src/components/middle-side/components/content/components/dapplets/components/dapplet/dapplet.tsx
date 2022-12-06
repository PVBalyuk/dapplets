import { FunctionComponent } from "react";
import burger from "src/assets/burger.svg";

interface IProps {
  icon?: string;
  title?: string;
  author?: string;
  rating?: number;
  description?: string;
  tags?: string[];
}

const Dapplet: FunctionComponent<IProps> = ({
  icon,
  title,
  description,
  tags,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "74px",
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.3)",
        boxShadow: "10px 10px 40px rgba(156, 185, 222, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={burger}
        alt="#"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      />
      <img
        src={burger}
        alt="#"
        width={50}
        height={50}
        style={{ marginRight: "20px" }}
      />
      <h2 style={{ width: "100%", maxWidth: "212px", marginRight: "20px" }}>
        {title}
      </h2>
      <p
        style={{
          width: "100%",
          maxWidth: "270px",
          marginRight: "20px",
          // display: "-webkit-box",
          // "-webkitLineClamp": 2,
          // lineClamp: 2,
          // "-webkitBoxOrient": "vertical",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {description}
      </p>
      <span style={{ width: "100%", maxWidth: "115px", marginRight: "20px" }}>
        asdasdasdadas
      </span>
      <div style={{ width: "100%", maxWidth: "150px", marginRight: "20px" }}>
        {tags}
      </div>
      <div style={{ borderRadius: "50px", width: "85px" }}>Install</div>
    </div>
  );
};

export default Dapplet;
