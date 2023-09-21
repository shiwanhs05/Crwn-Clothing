import Home from "./routes/home/home.component";
import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => <h1>I'm the shop component</h1>

  const App = () => {
  return (
    <Routes>
    
    <Route path="/" element={<Navigation/>}>
    <Route index="true" element={<Home/>}/>
    <Route path="shop" element={<Shop/>}/>
    </Route>
    </Routes>
    )
};
export default App;