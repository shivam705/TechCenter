import React from 'react'
import Header from './Header';
function About() {
  return (
    <div>
      <Header/>
      <div style={{fontWeight:'bold',maxWidth:'90%', border:'0px solid', margin:"0 auto", padding:'10px',background:'#DABA7D'}}>
        <h2 style={{textAlign:"center"}}>
          <b>ABOUT GAYATRI COMPUTER EDUCATION CENTER</b>
        </h2><hr/>

        <p style={{textShadow:"1px 1px 2px #333"}}>
          Gayatri Computer Education Centerestabd in 2009 situated on near MoharganjChahaniya, Chandauli, is one of the most prestigious Institute run by the Gayatri Computer Education Center. This Institute has been harvesting invaluable advantages of its location. The Institute has been playing a key role not only in the District as one of the most prominent districts in the State & other state, economically and educationally as well, but also has been functioning as a wonderful resource for trained I. T. Professionals manpower to the country.
          <br/>
          As a committed and dedicated organization and ISO Certified (9001:2008) Institute, our goal to maintain a learner focus in providing accessible and quality education to directly prepare our students for further study, or careers in the I.T. and Business global economies. Our Institute affords a personal touch to all its students with small class sizes and an excellent student help service. We create a dynamic, student-centred international learning environment, which promotes individual potential. We invite you to study the information available in this Prospectus. Whether you are a prospective student, a parent, guidance counsellor, a business or research partner, community group, or an international associate, we would be delighted to engage in more detail about what GCEC can offer you.
        </p>
        <img src={"https://static.wixstatic.com/media/cb9425_0e4c95749ad34bc3bf0261dce24cc253~mv2.png/v1/crop/x_62,y_33,w_414,h_211/fill/w_150,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cb9425_0e4c95749ad34bc3bf0261dce24cc253~mv2.png"} width={90} height={90} alt="image_not_found"></img>
        <p>
          Dr. Neelkhant Mishra<br/>
           ​Head of School
        </p>
      </div>
    </div>
  )
}

export default About;