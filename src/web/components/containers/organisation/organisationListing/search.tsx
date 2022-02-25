import React, { useState, useEffect, useRef } from "react";
import { AppRoutes } from "../../../../router/appRoutes";
import { useDispatch, useSelector } from "react-redux";
import SearchOutlined from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import { Button, Input } from "antd";
import { searchIcon } from "../../../../images";
import SelectInput from "../../../stateless/common/selectInput";
import InputBox from "../../../stateless/common/inputBox";
import "./search.less";

export const SearchBar = (props: any) => {
  const [showInput, setShowInput] = useState(false);

  const searchRef = useRef<any>(null);
  const inputRef = useRef<any>(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchState, setSearchState] = useState<any>();
  const [enterHit, setEnter] = useState(false);
  const history = useHistory();
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    let handler = (event: any) => {
      if (!showInput) {
        if (!searchRef.current?.contains(event.target)) {
          setShowInput(false);
        }
      } else if (!inputRef.current?.contains(event.target)) {
        setShowInput(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
    console.log(searchValue, "dsc");
  };
  const selectItem = (item: any) => {
    setSearchValue(item);
  };

  const handleClick = () => {
    setShowInput(true);
  };

  return (
    <div className="search-renderer">
      {showInput ? (
        <input
          ref={inputRef}
          className="ib-1"
          placeholder="Search Cloud Store"
          value={searchValue}
          onChange={handleChange}
        />
      ) : null}
      <Button ref={searchRef} onClick={handleClick} className="searchBtn">
        <img src={searchIcon} />
      </Button>
    </div>
  );
};
