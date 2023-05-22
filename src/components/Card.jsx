import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-start;
  ${'' /* @media only screen and (max-width: 768px) {
    height: 200vh;
  } */}
  @media only screen and (max-width:1028px) {
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
              <div className="card-header"><h3>Youtube clone</h3></div>
               <div className="card-body">
                    <img src="./img1/youtube.png" alt='youtube' width="100%" height="150px"/>
                    <p>Youtube clone in Reactjs with MUI-5 and RapidAPI</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://youtube-rakesh.onrender.com/" target="blank">Visit Project</a></button>
               </div>
           </div>
         </div>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Movie Search App.</h3></div>
               <div className="card-body">
                     <img src="./img1/movies.png" alt='youtube' width="100%" height="150px"/>
                    <p>Movie search app using React Hooks and the app will be able to search for movies via the OMDB API .</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://moviefinder-c9zg.onrender.com/" target="blank">Visit Project</a></button>
     
               </div>
           </div>
         </div>
       <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Blog Website.</h3></div>
               <div className="card-body">
                     <img src="./img1/blog.png" alt='youtube' width="100%" height="150px"/>
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
                 <img src="./img1/todolist.png" alt='youtube' width="100%" height="150px"/>
                   <p>Dynamic Frontend, through EJS,which is an NPM package.Backend built with Nodejs,Database Used: MongoDB Atlas.</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://todolist-v2-qc8a.onrender.com/" target="blank">Visit Project</a></button>
     
               </div>
           </div>
         </div>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Tanpsycon 2023 website</h3></div>
               <div className="card-body">
                  <img src="./img1/tanspy.png" alt='youtube' width="100%" height="150px"/>
                <p>Tanpsycon event website using Ejs,Nodejs,Expressjs,MongoDB.</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://tanpsycon2023.onrender.com" target="blank">Visit Project</a></button>
               </div>
           </div>
         </div>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Social Media website</h3></div>
               <div className="card-body">
                 <img src="./img1/socialmedia.png" alt='youtube' width="100%" height="150px"/>
               <p>Website using Reactjs.</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://reactapp2023.onrender.com/" target="blank">Visit Project</a></button>
     
               </div>
           </div>
         </div>
         </div>
         <div className='row'>
            <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>Google keep App</h3></div>
               <div className="card-body">
                      <img src="./img1/googlekeep.png" alt='youtube' width="100%" height="150px"/>
                    <p>Clone of google keep app using Reactjs</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://reactgooglekeepapp.onrender.com/" target="blank">Visit Project</a></button>
               </div>
           </div>
         </div>
             <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>portfolio</h3></div>
               <div className="card-body">
                      <img src="./img1/portfolio.png" alt='portfolio' width="100%" height="150px"/>
                    <p>portfolio app using Reactjs and threejs</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://rakeshm-web-developer.onrender.com/" target="blank">Visit Project</a></button>
               </div>
           </div>
         </div>
         <div className='col-lg-4 '>
             <div className="card">
              <div className="card-header"><h3>others</h3></div>
               <div className="card-body">
                      <img src="./img1/portfolio.png" alt='portfolio'sx={{sm:{width:"80%"}}} width="100%" height="150px"/>
                    <p>portfolio app using Reactjs and threejs</p>
                <button className="btn btn-lg btn-block btn-dark button-in-cart" type="button"><a href="https://reactgooglekeepapp.onrender.com/" target="blank">Visit Project</a></button>
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