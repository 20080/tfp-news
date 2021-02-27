import './index.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoginWithEmailAndPassword from "./components/LoginWithEmailAndPassword";

function App() {
  return (
<Router>
    <Switch>
    <Route path='/' exact render={()=>(
        <Header newsHead={'TFP news'}/>
    )}/>
    <Route path='/World'  render = {(props)=>(
        <Header {...props} newsHead={'World 🌏'} />
    )}/>
    <Route path='/Entertainment' render = {(props)=>(
        <Header {...props} newsHead={'Entertainment 🎥'} />
    )}/>
    <Route path='/National'  render = {(props)=>(
        <Header {...props} newsHead={'National 📰 '} />
    )}/>
    <Route path='/Sports'  render = {(props)=>(
        <Header {...props} newsHead={'Sports 🏅'} />
    )}/>
    <Route path='/Business' render = {(props)=>(
        <Header {...props} newsHead={'Business 💸'} />
    )}/>
    <Route path='/Login123'  component={LoginWithEmailAndPassword}/>
    <Footer/>
    </Switch>
</Router>
  );
}

export default App;
