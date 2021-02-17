import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Login from './components/login';
import Footer from "./components/footer";
import Register from "./components/register";
import Admin from "./components/admin";
import Volunteers from "./components/volunteer";
import Participants from "./components/participant";
import Events from "./components/event";
import RegEvents from "./components/regEvents";
import SlideShow from "./components/slideshow";
import SlideShow2 from "./components/slideshow2";
import ObjCard from "./components/card";


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
      <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} /> 
      <Route path="/admin" component={Admin} /> 
      <Route path="/volunteer" component={Volunteers}></Route>
      <Route path="/participant" component={Participants}></Route>
      <Route path="/events" component={Events}></Route>
      <Route path="/regEvents" component={RegEvents}></Route>
      <Route path="/SlideShow" component={SlideShow}></Route>
      <Route path="/SlideShow2" component={SlideShow2}></Route>  
      <Route path="/Card" component={ObjCard}></Route>    
      
      </Switch>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
