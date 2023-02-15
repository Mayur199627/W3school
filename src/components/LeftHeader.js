import React, { Component } from 'react'

export default class LeftHeader extends Component {
  render() {
    return (
      <div style={{width:'30%',fontWeight:600,display:'flex',justifyContent:"space-between" ,alignItems:'center'}}>
        <div style={{display:'flex' ,alignItems:'center'}}>
            <p>Tutorials</p>
            <div>
                <svg fill="#000000" width="20px" height="20px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>dropdown</title>
                <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
                </svg>
            </div>
        </div>
        <div style={{display:'flex' ,alignItems:'center'}}>
            <p>Refrences</p>
            <div>
                <svg fill="#000000" width="20px" height="20px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>dropdown</title>
                <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
                </svg>
            </div>
        </div>
        <div style={{display:'flex' ,alignItems:'center'}}>
            <p>Exercises</p>
            <div>
                <svg fill="#000000" width="20px" height="20px" viewBox="-6.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>dropdown</title>
                <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>
                </svg>
            </div>
        </div>
        <div>
            <p>Sign Up</p>
            </div>
      </div>
    )
  }
}
