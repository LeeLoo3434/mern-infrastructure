import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import './NavBar.css'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className='nabvar'>
            <Link to="/orders">Order History</Link>
            <Link to="/orders/new">New Order</Link>
            &nbsp;&nbsp; Welcome, {user.name}
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}