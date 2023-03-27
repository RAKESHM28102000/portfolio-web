import React from 'react';

function Workcard(props) {
  return (<section id="cardin">
    <div class="cardinwork">
       <div><h1>{props.title}</h1></div>
       <div> <img class="img-items" width="40%" height="40%" src={props.image} alt='cont-1'/></div>
       <div> <p>{props.content}</p></div>
      {/* <button class="btn btn-lg btn-block btn-dark button-in-cart" type="button">link</button> */}
    
    </div>
    </section>
  
  )
}

export default Workcard;