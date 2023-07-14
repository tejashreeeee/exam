
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./components/layout";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/Register";
import Nopage from "./components/nopage";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle";
const App=()=>{
   return(
    
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
    )
   };
   export default App;

   
