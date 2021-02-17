import './index.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {useState} from 'react'

function App() {
    const [newsHead,setNewsHead] = useState('TFP news')
  return (
    <div className={'App'}>
<Header newsHead={newsHead}/>
<Navbar/>
    </div>
  );
}

export default App;
