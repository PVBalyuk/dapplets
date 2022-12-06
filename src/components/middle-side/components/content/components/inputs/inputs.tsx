import React, { FunctionComponent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { enGb } from "src/core";
import { AppDispatch, useAppSelector } from "src/store";
import { Input } from "src/ui-kit";
import { changeDirection, getAllDapplets } from "src/store/reducers";
import { DirectionFilter } from "src/types";
import { useDebounce } from "src/hooks";

const Inputs: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const dapplets = useAppSelector((store) => store.dapplets);
  const dispatch = useDispatch<AppDispatch>();
  const debounced = useDebounce(searchValue);

  useEffect(() => {
    dispatch(
      getAllDapplets({
        start: 0,
        direction: dapplets.direction,
        search: debounced,
      })
    );
  }, [dapplets.direction, debounced, dispatch]);

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeDirection(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setSearchString(e.target.value));
    setSearchValue(e.target.value);
  };

  return (
    <div
      style={{
        padding: "24px 20px 20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div style={{ flex: 2 }}>
        <Input
          onChange={handleInputChange}
          maxWidth="400px"
          id={enGb.SEARCH}
          inputLabel={enGb.SEARCH}
          withAdditionalLabel={false}
        />
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            width: "200px",
            height: "40px",
            paddingLeft: "10px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#2A2A2A",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.8)",
            boxShadow: "10px 10px 40px rgba(156, 185, 222, 0.36)",
            borderRadius: "10px",
          }}
        >
          {enGb.RELEASE_DATE}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <select
          onChange={changeHandler}
          style={{
            paddingLeft: "10px",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: "#2A2A2A",
            width: "100%",
            maxWidth: "200px",
            height: "40px",
            borderRadius: "10px",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), rgba(255, 255, 255, 0.8)",
            boxShadow: "10px 10px 40px rgba(156, 185, 222, 0.36)",
            border: "none",
          }}
        >
          <option value={DirectionFilter.DESC}>Desc</option>
          <option value={DirectionFilter.ASC}>Asc</option>
        </select>
      </div>
    </div>
  );
};

export default Inputs;
