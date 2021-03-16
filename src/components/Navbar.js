import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to='/' exact>
                <li>HOME</li>
            </NavLink>
            <NavLink to='/projects' exact>
                <li>PROJECTS</li>
            </NavLink>
            <NavLink to='/about' exact>
                <li>ABOUT ME</li>
            </NavLink>   
            <a target='_blank' href='https://thecodeplanner.medium.com/'><li>BLOG</li></a>
        </div>
        
    )
}

export default Navbar