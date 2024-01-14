import React from 'react'
import Header from './Header'
function Course() {
  return (
    <div>
      <Header/>
      <div style={{width:"80%", paddingTop:"2%",margin:"0 auto"}}>
        <div style={{textAlign:"center", alignContent:"center",backgroundColor:"#C5D0D0"}}>
          <b style={{color:"blue",fontSize:"21px"}}>ADCA</b>
          <p style={{fontSize:"18px"}}>Advance Diploma In Computer Application</p>
          <p style={{fontSize:"18px",color:"#3CAE72"}}>DURATION : 1 YEAR</p>
        </div>
        <div style={{backgroundColor:"#8EA987"}}>
          <div style={{display:"flex"}}>
            <p style={{color:"#CAC137"}}>Eligibility : 10th /12th </p>
            <p style={{color:"#CAC137", marginRight:"0",marginLeft:"auto"}}>Code No. : GCEC/001</p>
          </div>
          <div>
              <b style={{color:"#6C8080"}}>SEMESTER - 1</b>
              <ul style={{listStyleType:"circle",paddingLeft:"7%", marginRight:"auto"}}>
                <li>Computer Concept & Fundamentals</li>
                <li>Operating System</li>
                <li>MS-Office (MS-Word, MS- Excel, MS-Power Point, MS-Access)</li>
                <li>HTML & Front Page</li>
                <li>Lab-I</li>
              </ul>
          </div>
          <hr/>
          <div>
              <b style={{color:"#6C8080"}}>SEMESTER - 2</b>
              <ul style={{listStyleType:"circle",paddingLeft:"7%", marginRight:"auto"}}>
                <li>C Language</li>
                <li>Programming in C++</li>
                <li>Java</li>
                <li>HTML & Front Page</li>
                <li>Lab-II</li>
              </ul>
          </div>
        </div>
        
      </div>
      </div>
  )
}

export default Course