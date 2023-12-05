import './App.css';
import Navbar from '../src/Components/Navbar/Navbar';
import { Message } from './Components/Message/Message';
import { Hero } from './Components/Hero/Hero';
import { Content } from './Components/Content/Content';
import { Footer } from './Components/Footer/Footer';
import { Section } from './Components/Section/Section';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Message/>
      <Hero/>
      <Content/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
