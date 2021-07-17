import "./App.css";
import { Button } from "react-bootstrap";
import UsersContainer from "./Components/Container/UsersContainer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <UsersContainer />
    </div>
  );
}

export default App;
