import styled from 'styled-components';
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Card from './components/Card';
import Footer from './components/Footer';
// import Icons from './components/Icons';


const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color:white;

${'' /* background -1 */}
${'' /* background-color:rgb(117, 0, 107) ;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png"); */}

${'' /* background-4 */}
${'' /* background-color: #7300a4;
background-image: url("https://www.transparenttextures.com/patterns/escheresque-dark.png"); */}
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

${'' /* background-2 */}
${'' /* background-color: #74EBD5;
background-image: linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%); */}
background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
background-image: linear-gradient( 135deg, #65FDF0 10%, #1D6FA3 100%);
background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
background-color: #00DBDE;
background-image: linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%);



  &::-webkit-scrollbar{
    display: none;
  }
`;
function App() {
  return (<Container>
            <Hero/>
            <Who/>
            <Works/>
            <Card/>
            <Contact/>
            <Footer/>
            {/* <Icons/> */}

           
  </Container>)}
export default App;





