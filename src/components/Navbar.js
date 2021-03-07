import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/' exact>
                <li>home</li>
            </NavLink>
            <NavLink to='/about' exact>
                <li>about me</li>
            </NavLink>
    
            <NavLink to='/projects' exact>
                <li>projects</li>
            </NavLink>
            
            <NavLink to='skills' exact>
                <li>skills</li>
            </NavLink>   
        </div>
    )
}

export default Navbar