import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import Footer from './components/footer';
import Numbers from './components/numbers';
import styled from 'styled-components'


function OurText(){
  return <p>This is our text</p>
}

function ShowMessage(props){
  if(props.toShow){
    return <h2>My Message</h2>
  } else {
    return <h2>Forbidden</h2>
  }
}

const Paragraph = styled.p'
  font-size: 3em;
  color: yellow;
'

const pStyle = {
  fontSize: '2em',
  color: 'red'
}

function App() {
  return (
    <div className="App">
      <Header info="This is my Header"></Header>
      <p style={pStyle}>Hello main component</p>
      <Paragraph>Newly Styled</Paragraph>
      <OurText />
      <Footer trademark="made by Fritz"></Footer>
      <ShowMessage toShow={false}></ShowMessage>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Numbers></Numbers>
    </div>
  );
}

export default App;
