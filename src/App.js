import Maincompo from "./Components/Third/Maincompo";
import Mainsec from "./Components/Secnd/Mainsec";
import MainFirst from "./Components/First/MainFirst";
import { HashRouter, Route, Switch } from "react-router-dom";
import ZeroMain from "./Components/Zero/ZeroMain";

function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={ZeroMain}/>
          <Route path="/blog" exact component={MainFirst}/>
          <Route path="/price" exact component={Mainsec}/>
          <Route path="/works" exact component={Maincompo}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
