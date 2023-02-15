import React, { Component } from 'react'

export default class Icons extends Component {
  render() {
    return (
      <div style={{width:"8%", display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div className="mode">
        <img src="./images/mode.svg" alt="" />
        </div>
        <div className="earth">
        <img src="./images/globe.svg" alt="globe" />
        </div>
        <div className="search">
        <img src="./images/search.svg" alt="" />
        </div>
      </div>
    )
  }
}
