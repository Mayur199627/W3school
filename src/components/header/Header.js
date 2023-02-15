import React, { Component } from 'react'
import Icons from '../Icons'
import LeftHeader from '../LeftHeader'
import RightHeader from '../RightHeader'
export default class Header extends Component {
  render() {
    return (
      <div className="header-container" style={{margin:'10px 20px',width:"calc(100% - 40px)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div>
            <img src="./images/W3Schools_logo.png" alt="logo" style={{height:"40px", width:"40px"}}/>
        </div>
          <LeftHeader />
          <Icons />
          <RightHeader />
      </div>
    )
  }
}
