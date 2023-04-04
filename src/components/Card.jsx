import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  ${'' /* @media only screen and (max-width: 768px) {
    height: 200vh;
  } */}
  @media only screen and (max-width:1028px) {
    height:200vh;
    align-items:center;
    padding-top:100px
  }
`;

function Card() {
  return (<section id="card">
<Section>
<div><h1 style={{marginTop:"70px"}}>PROJECTS</h1></div>
 <div className="cardincard">  
     <div className='row'>
     <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Google keep App</h3></div>
               <div className="card-body">
                    <p>Clone of google keep app using Reactjs</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://reactgooglekeepapp.onrender.com/" target="blank">Visit Project</a></button>
               </div>
           </div>
         </div>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Movie Search App.</h3></div>
               <div className="card-body">
                    <p>Movie search app using React Hooks and the app will be able to search for movies via the OMDB API .</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://moviefinder-c9zg.onrender.com/" target="blank">Visit Project</a></button>
     
               </div>
           </div>
         </div>
       <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Blog Website.</h3></div>
               <div className="card-body">
                {/* <img className="img-items" width="40%" height="40%" src="./img/logo.png" alt='cont-1'/> */}
                <p>Blog website using node.js and express.js and mongodb and ejs.</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://myblog-r2zp.onrender.com/" target="blank">Visit Project</a></button>
     
               </div>
           </div>
         </div>
        </div>
         <div className='row'>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>To-do list App.</h3></div>
               <div className="card-body">
                {/* <img className="img-items" width="40%" height="40%" src="./img/logo.png" alt='cont-1'/> */}
                <p>Dynamic Frontend, through EJS,which is an NPM package.Backend built with Nodejs,Database Used: MongoDB Atlas.</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://todolist-v2-qc8a.onrender.com/" target="blank">Visit Project</a></button>
     
               </div>
           </div>
         </div>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Tanpsycon 2023 website</h3></div>
               <div className="card-body">
                <p>Tanpsycon event website using Ejs,Nodejs,Expressjs,MongoDB.</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://tanpsycon2023.onrender.com" target="blank">Visit Project</a></button>
               </div>
           </div>
         </div>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>E-commerce website</h3></div>
               <div className="card-body">
               <p>Website using Reactjs.</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://reactapp2023.onrender.com/" target="blank">Visit Project</a></button>
     
               </div>
           </div>
         </div>
         </div>
</div>

</Section>


</section>
   
  )
}

export default Card