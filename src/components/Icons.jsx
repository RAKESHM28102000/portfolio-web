import React from 'react';
import styled from 'styled-components';
const Section=styled.div`
  display:flex;
  scroll-snap-align: center;
  justify-content:space-around;
  flex-wrap:wrap;
  align-items:center;
  height:100vh;
  @media only screen and (max-width:1028px){
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
   
  }

`;
// const div className="iconsclass"=styled.div`
//   display:flex;
//   flex-direction:column;
//   justify-content:space-around;
//   align-items:center;
//   text-align:center;
//   padding:20px;
//   margin:20px;
//   gap:50px;
//   @media only screen and (max-width:1028px){
//     text-align:center;
//     gap:60px;

//   }
//   `;

function Icons() {
  return (<Section>
     <div className="iconsclass">
         <i  class="fa-brands fa-whatsapp fa-4x"></i>
          <h3 style={{marginTop:"20px"}} >whatsapp</h3>
          {/* <p style={{textAlign:"center",marginTop:"20px"}} >+916383627745</p> */}
          <button style={{marginTop:"20px"}} className="btn btn-lg btn-block btn-dark " type="button">+916383627745</button>
        </div>
   
        <div className="iconsclass">
        <i class="fa-brands fa-linkedin fa-4x"></i>
        <h3 style={{marginTop:"20px"}}>linkedin</h3>
       <button style={{marginTop:"20px"}} className='btn btn-lg btn-block btn-dark'><a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/rakesh-m-b67121217/" target="blank">Profile</a></button>
   
          {/* <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">tanpsycon_2023</button> */}
        </div>
 
        <div className="iconsclass"  >
       <i class="fa-solid fa-envelope fa-4x"></i>
        <h3 style={{marginTop:"20px"}}>Mail-id</h3>
        {/* <p  style={{textAlign:"center",marginTop:"20px"}} >mrakeshmrakesh885@gmail.com</p> */}
        <button style={{marginTop:"20px"}} class="btn btn-lg btn-block btn-dark" type="button">mrakeshmrakesh885@gmail.com</button>
        </div>
  
    </Section> )
}

export default Icons;