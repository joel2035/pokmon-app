import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page";
import Collection from "../pages/collection";
import PageNotFound from "../pages/page-not-found";
import Shop from "../pages/shop";

function AppRoute() {
    return(
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/home-page" element={<HomePage/>}/>
                <Route path="/" element={<Navigate to="/home-page" replace/>}/>
                <Route path="/collection" element={<Collection/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute;