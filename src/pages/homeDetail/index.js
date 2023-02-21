import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";

const HomeDetail = () => {
  const [info, setInfo] = useState({})
  const [jobInfo, setJobInfo] = useState({})
  const location = useLocation()
  const history = useHistory()
  useEffect(() => {
    const search = location.search.split('?')[1].split("&").map(item => {
      return JSON.parse(decodeURI(item.split("=")[1]))
    })
    setInfo(search[0])
    setJobInfo(search[1])
  }, [location])
  useEffect(() => {
    if(info.name) {
      console.log('detail详情页面的信息是', info)
    }
  }, [info, jobInfo])
  const handleBack = useCallback(() => {
    history.push({
      pathname: '/',
      state: {
        update: Math.random() > 0.5 ? "true" : "false"
      }
    })
  }, [history])
  return (
    <div>
      <button onClick={handleBack}>返回</button>
      姓名：{info.name} ---- 年龄：{info.age}
      工作：{jobInfo.job} ---- 工作年限：{jobInfo.jobTime}
    </div>
  )
}
export default HomeDetail