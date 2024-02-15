import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";
import {FC} from "react";

interface LayoutProps {
    children: React.ReactNode,
}
const Layout:FC<LayoutProps>  = ({children}) => {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
export default Layout