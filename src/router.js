import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Hearer from './componentes/hearder';
import Home from './pages/home';


function RouterApp() {
    return(
       <BrowserRouter>
            <Hearer></Hearer>
            <Routes >
               <Route path='/' element={<Home/>}></Route>
            </Routes>
       </BrowserRouter>
    )


}

export default RouterApp;