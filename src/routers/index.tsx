import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page";
import Collection from "../pages/collection";

function AppRoute() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home-page" element={<HomePage/>}/>
                <Route path="/collection" element={<Collection/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute;