import React, { memo, useEffect, useState } from "react";
import { Carousel } from "antd";
import request from "@/services/request";
import { HomeWrapper } from "./style";

const Home = memo(() => {
  const [houseList, setHouseList] = useState({});

  useEffect(() => {
    request("/home/highscore").then((res) => {
      if (res.status === 200) {
        setHouseList(res.data);
      }
    });
    return () => {};
  }, []);

  const contentStyle = {
    height: "320px",
    lineHeight: "320px",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <HomeWrapper>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>

      <div className="home-content w">
        <h1>探索全球超400万独特房源</h1>

        <h2>{houseList.title}</h2>

        {houseList?.list?.map((item) => {
          return (
            <div key={item.id}>
              <span>{item.name}</span>
              <img src={item.picture_url} alt="" />
            </div>
          );
        })}
      </div>
    </HomeWrapper>
  );
});

export default Home;
