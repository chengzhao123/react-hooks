import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import './index.css'
import Container from "../../components/container";
import SwitchItem from "../../components/switchItem";

const Home = () => {
  const [active, setActive] = useState(0);
  const location = useLocation()
  useEffect(() => {
    if(location.state && location.state.update === "false") {
      console.log('index 不初始化', location)
    } else {
      console.log('index 首页初始化的数据', location)
    }
  }, [location])
  return (
    <div className="main-ccontainer">
      <SwitchItem list={[{ title: '未处理', num: 10 }, { title: '已失效', num: 20 }, { title: '已处理', num: 13 }]} activeIndex={active} clk={(e) => setActive(e)} />
      <div className="list-container">
        <Container>

        </Container>
      </div>
    </div>
  )
}
export default Home;