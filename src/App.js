import './index.css';
import Header from "./components/Header";
import {useEffect, useState} from 'react'
import Storybox from "./components/Storybox";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom"

function App() {
    // const [newsHead,setNewsHead] = useState('TFP news')
  return (
<Router>
    <div className={'App'}>
<Route path='/' exact render={(props)=>(
    <Header newsHead={'TFP news'}/>
)}/>
<Route path='/World' exact render = {(props)=>(
    <Header {...props} newsHead={'TFP World 🌏'} />
)}/>
        <Route path='/Entertainment' exact render = {(props)=>(
            <Header {...props} newsHead={'TFP Entertainment 🎥'} />
        )}/>
        <Route path='/National' exact render = {(props)=>(
            <Header {...props} newsHead={'TFP National 📰 '} />
        )}/>
        <Route path='/Sports' exact render = {(props)=>(
            <Header {...props} newsHead={'TFP Sports 🏅'} />
        )}/>
        <Route path='/Business' exact render = {(props)=>(
            <Header {...props} newsHead={'TFP Business 📈 💸'} />
        )}/>
<Storybox/>
<Footer/>
    </div>
      </Router>
  );
}

export default App;
