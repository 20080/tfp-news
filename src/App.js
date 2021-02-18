import './index.css';
import Header from "./components/Header";
import {useState} from 'react'
import Storybox from "./components/Storybox";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom"

function App() {


    const [newsHead,setNewsHead] = useState('TFP news')
  return (
      <Router>
    <div className={'App'}>
<Header newsHead={newsHead}/>
<Storybox/>
<Footer/>
    </div>
      </Router>
  );
}

export default App;
