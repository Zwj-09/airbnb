import React, { memo, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import classnames from "classnames";

import {
  HeaderWrapper,
  LeftWrapper,
  CenterWrapper,
  RightWrapper,
} from "./style";
const AppHeader = memo(() => {
  const [searchTabs] = useState([
    { label: "全球", value: "全球" },
    { label: "入住退房日期", value: "入住退房日期" },
    { label: "关键词", value: "关键词" },
  ]);
  const [currentSearchTab, setCurrentSearchTab] = useState(0);

  const handleClickSearchTab = (index) => {
    setCurrentSearchTab(index);
  };

  return (
    <HeaderWrapper>
      <LeftWrapper>
        <img src={require("@/assets/img/logo.png")} alt="" />
      </LeftWrapper>
      <CenterWrapper>
        <div className="search-box">
          {searchTabs.map((item, index) => {
            return (
              <div
                key={item.value}
                className={classnames("search-tab", {
                  active: currentSearchTab === index,
                })}
                onClick={() => handleClickSearchTab(index)}
              >
                <div>{item.label}</div>
                {index < 2 ? (
                  <div className="divid"></div>
                ) : (
                  <div className="search-right_icon">
                    <SearchIcon />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CenterWrapper>
      <RightWrapper>
        <LanguageIcon />

        <div className="btn">
          <MenuIcon />
          <Avatar alt="Cindy Baker" src={require("@/assets/img/avatar.png")} />
        </div>
      </RightWrapper>
    </HeaderWrapper>
  );
});

export default AppHeader;
