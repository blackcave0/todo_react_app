import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className="links all-link">All</Link>
      <Link to='/?todos=active' className="links active-link">Active</Link>
      <Link to='/?todos=completed' className="links completed">Completed</Link>
    </nav>
  )
}

// adding some comments here...
export default Navbar