import React from 'react';
import styled from 'styled-components';
const Section=styled.div`
  display:flex;
  scroll-snap-align: center;
  justify-content:space-around;
  flex-wrap:wrap;
  align-items:center;
  height:80vh;
  @media only screen and (max-width:1028px){
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
   
  }

`;
const container=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  text-align:center;
  padding:20px;
  margin:20px;
  gap:50px;
  @media only screen and (max-width:1028px){
    text-align:center;
    gap:60px;

  }
  `;

function Icons() {
  return (<Section>
     <container>
         <i style={{textAlign:"center",marginLeft:"30px"}} class="fa-brands fa-whatsapp fa-4x"></i>
          <h3 style={{textAlign:"center"}}>whatsapp</h3>
          <p style={{textAlign:"center"}} >+916383627745</p>
          {/* <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">+917448723340</button> */}
        </container>
   
        <container>
        <i  style={{textAlign:"center",marginLeft:"20px"}} class="fa-brands fa-linkedin fa-4x"></i>
        <h3 style={{textAlign:"center"}}>linkedin</h3>
       <button style={{textAlign:"center"}} className='btn btn-lg btn-block btn-dark'><a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/rakesh-m-b67121217/" target="blank">Profile</a></button>
   
          {/* <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">tanpsycon_2023</button> */}
        </container>
 
        <container  >
       <i style={{textAlign:"center",marginLeft:"80px"}} class="fa-solid fa-envelope fa-4x"></i>
        <h3  style={{textAlign:"center"}} >Mail-id</h3>
        <p  style={{textAlign:"center"}} >mrakeshmrakesh885@gmail.com</p>
          {/* <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">tanspycon2023@gmail.com</button> */}
        </container>
  
    </Section> )
}

export default Icons;