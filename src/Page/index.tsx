import React, { memo } from 'react';
import classNames from 'classnames';
import './index.less' // 引入样式
export interface PageProps {
  total: number
  page: number
  btn?: number
  current?: number
  type?: 'primary' | 'default';
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/** 按钮组件 */
const Page: React.FC<PageProps> = (props) => {
  const { total=30, page=5, current=1,btn=5, onClick } = props;

  // 总共多少页
  const allBtn = total / 6 as any;

  function btnFun():any {
    const btnList = []
    if(allBtn <= btn){
      for (let i = 0; i < allBtn; i++) {
        btnList.push(i+1)
      }
      return creatDom(btnList)
    }
  }

  function creatDom(list:Number[]){
    return list?.map((item,index)=>{
      return <li key={index}>{item.toString()}</li>
    })
  }
  return (
    <ul className='Page_btn_container'>{btnFun()}</ul>
  );
};

export default memo(Page);
