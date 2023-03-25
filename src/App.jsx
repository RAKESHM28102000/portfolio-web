import styled from 'styled-components';
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color:white;
  ${'' /* background: url("./img/bg.jpeg"); */}
 ${'' /* background:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_h1W-0wC3w2R69A6vBmxKZ-RQG7Tvr9NDSzVQgwofKA&usqp=CAU&ec=48665701"); */}
 background:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9676pZzdwD3W81fr1wdrXrZNYlSBlgvi0bzCJLr4jw&usqp=CAU&ec=48665701");
 background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapZTm-g8JdTmnz1pS8FeKZf-AaerwArmciAQHrGGXVzFzHQF-RYrHL0DpRII0CKB4M-Z61gyi3RI&usqp=CAU&ec=48665701");
 background-size:cover;
background-position:center;
  &::-webkit-scrollbar{
    display: none;
  }
`;
function App() {
  return (<Container>
            <Hero/>
            <Who/>
            <Works/>
            <Contact/>
  </Container>)}
export default App;





