import "./navbar.css"
function NavBar() {
    return (
        <div className='navbar'>
            <nav className="nav">
                <a className="nav-link">Profile</a>
                <a className="nav-link">Messages</a>
                <a className="nav-link">Users</a>
            </nav>
        </div>
    )
}
export default NavBar