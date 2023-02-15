import React, { Component } from 'react'

export default class RightHeader extends Component {
  render() {
    return (
      <div style={{display:"flex",justifyContent:"space-between",alignItems:'center',width:"40%"}}>
      <div className="pro" >
        <button style={{border:'none', padding:"10px 20px",borderRadius:"30px",backgroundColor:"#2d3436",color:'white',fontWeight:600,fontSize:"1rem"}}>Pro</button>
      </div>
      <div className="getCertified" >
        <button style={{border:'none', padding:"10px 20px",borderRadius:"30px",backgroundColor:"lightpink",color:'black',fontWeight:600,fontSize:"1rem"}}>Get Certified</button>
      </div>
      <div className="createWebsite">
        <button style={{border:'none', padding:"10px 20px",borderRadius:"30px",backgroundColor:"#f6e58d",color:'black',fontWeight:600,fontSize:"1rem"}}>Create Website</button>
      </div>
      <div className="login">
        <button style={{border:'none', padding:"10px 20px",borderRadius:"30px",backgroundColor:"#6ab04c",color:'white',fontWeight:600,fontSize:"1rem"}}>Log in</button>
      </div>
      </div>
    )
  }
}
