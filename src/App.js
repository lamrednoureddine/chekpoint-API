import { Routes,Route } from "react-router-dom";
import UsersList from "./Compoints/Users/UsersList";
import Profils from "./Compoints/Profils/Profils";

function App() {
  return (
    <div className="App">
    <Routes>
<Route path='/' element={<UsersList/>}> </Route>
<Route path='User/:id' element={Profils}> </Route>
     </Routes>
    </div>
  );
}

export default App;
