import React, { useCallback } from 'react';
import './index.css';
export default function SwitchItem(props) {
  const handChange = useCallback((index) => {
    props.clk(index)
  }, [props])
  return (
    <div className='switch-wrap'>
      {
        props.list.map((item, index) => {
          return <div key={Math.random()} className={["switch-item", props.activeIndex === index ? "active" : null].join(' ')} onClick={() => handChange(index)}>
            {item.title}<span className='switch-num'>({item.num})</span>
          </div>
        })
      }
    </div>
  )
}