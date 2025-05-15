import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar"
const NormalLayout = () => {
    return (
        <div>
            
            <NavBar />
            <Outlet />
            {/* <h1>Normal Layout</h1>
            <p>test🤍</p> */}
        </div>
    )
}


export default NormalLayout