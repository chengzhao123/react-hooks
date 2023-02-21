import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import './index.css';
import { PullToRefresh, List, InfiniteScroll } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
export default function Container() {
  const [hasMore, setHasMore] = useState(true)
  const dataInfo = {
    "name": "程钊",
    "age": "23"
  }
  const jobInfo = {
    "job": "前端开发",
    "jobTime": "3"
  }
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
  const loadMore = async () => {
    await sleep(1000)
    let info = data.concat(data)
    setData(info)
    setHasMore(info.length < 30)
  }
  const history = useHistory()
  const toDetail = () => {
    history.push({
      pathname: '/detail',
      search: `?info=${JSON.stringify(dataInfo)}&jobInfo=${JSON.stringify(jobInfo)}`,
    })
  }
  return (
    <>
      <div style={{ height: '50px', textAlign: 'center', lineHeight: '50px' }}>{new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}</div>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000)
          console.log('刷新操作')
        }}
      >
        <List>
          {data.map((item, index) => (
            <List.Item key={index} onClick={toDetail}>{item}</List.Item>
          ))}
        </List>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </PullToRefresh>
    </>
  )
}