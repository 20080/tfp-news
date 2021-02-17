import './index.css';
import Header from "./components/Header";
import {useState} from 'react'

function App() {
    const [newsHead,setNewsHead] = useState('TFP news')
  return (
    <div className={'App'}>
<Header newsHead={newsHead}/>
    </div>
  );
}

export default App;
