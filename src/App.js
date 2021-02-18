import './index.css';
import Header from "./components/Header";
import {useState} from 'react'
import Storybox from "./components/Storybox";
import Footer from "./components/Footer";

function App() {


    const [newsHead,setNewsHead] = useState('TFP news')
  return (
    <div className={'App'}>
<Header newsHead={newsHead}/>
<Storybox/>
<Footer/>
    </div>
  );
}

export default App;
