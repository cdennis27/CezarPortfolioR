import { Link, useResolvedPath, useMatch } from "react-router-dom"
let id = 7;
export default function Navbar() {
    const path = window.location.pathname
    
    return <nav className="nav">
        
        <ul>
            <CustomLink to={`/home`} onClick={() => scrollMore(-500)}>Home</CustomLink>

            <CustomLink to={"/work"} onClick={() => scrollMore(500)}>Work</CustomLink>
                
            <CustomLink to={`/about`}>About</CustomLink>

            <CustomLink to={`/contact`}>Contact</CustomLink>

            <CustomLink to={`/resume`}>Resume</CustomLink>
        </ul>
    </nav>
}
function scrollMore(x) {
    document.location.href = "#/home";
    window.scrollBy(0, x);
}
function CustomLink({ to, children, ... props}) {

    const resolvedPath = useResolvedPath(to)
    
    let isActive = useMatch({ path: resolvedPath.pathname, end: false})

    const path = window.location.hash

    console.log(window.location.hash);
    if (path === "#/") {
        id = 27;
        return document.location = "#/home";
    } else if (path === "#/home/7") {
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