import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Form from "./views/Form/Form";
import User from "./views/User/User";

function App() {
  return (
    <div className="App">
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/register">
        <Form />
      </Route>
      <Route path="/users">
        <User />
      </Route>
    </div>
  );
}

export default App;
