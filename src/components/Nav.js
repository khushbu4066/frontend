import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav class ="navbar" >
        <Link to="/" class="navbar-brand">CRUD operation</Link>
        <div class="nav">
           <Link to="/create-student" class="nav-link">Create Students</Link>
           <Link to="/student-list" class="nav-link">Student List</Link>
        </div>
    </nav >
    )
}

export default Nav;