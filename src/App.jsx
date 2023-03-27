import styled from 'styled-components';
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Card from './components/Card';
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

${'' /* background-3 */}
${'' /* background-color: #9500b3;
background-image: url("https://www.transparenttextures.com/patterns/football-no-lines.png"); */}

${'' /* background-4 */}
background-color:#00fff2;
background-image: url("https://www.transparenttextures.com/patterns/escheresque-dark.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

${'' /* background-2 */}
${'' /* background-color: #8d00a3;
background-image: url("https://www.transparenttextures.com/patterns/robots.png"); */}

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
  </Container>)}
export default App;





