import { Link, useResolvedPath, useMatch } from "react-router-dom"
let id = 7;
export default function Navbar() {
    const path = window.location.pathname
    
    return <nav className="nav">
        <Link to="/" className="site-title">Portfolio React</Link>
        <ul>
            <CustomLink to={`/pricing`}>Pricing</CustomLink>
                
            <CustomLink to={`/about`}>About</CustomLink>
        </ul>
    </nav>
}

function CustomLink({ to, children, ... props}) {

    const resolvedPath = useResolvedPath(to)
    //if end true, absolute path has to match
    const isActive = useMatch({ path: resolvedPath.pathname, end: false})

    const path = window.location.pathname

    console.log(path);
    if (path === "/pricing/7") {
        id = 27;
    } else {
        id = 7;
    }
    console.log(id);

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={`${to}/${id}`} {...props}>{children}</Link>
        </li>

    )
}