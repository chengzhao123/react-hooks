import  RouterDom  from "./router/index.js";
import {HashRouter} from "react-router-dom"
import { renderRoutes } from "react-router-config"
function App() {
  return (
    <HashRouter>
      {renderRoutes(RouterDom)}
      {
        console.log(renderRoutes)
      }
    </HashRouter> 
  );
}

export default App;
