import { Link, useResolvedPath, useMatch } from "react-router-dom"
let id = 7;
export default function Navbar() {
    const path = window.location.pathname
    
    return <nav className="nav">
        
        <ul>
            <CustomLink to={`/home`}>Home</CustomLink>

            <CustomLink to={"/work"}>Work</CustomLink>
                
            <CustomLink to={`/about`}>About</CustomLink>

            <CustomLink to={`/contact`}>Contact</CustomLink>

            <CustomLink to={`/resume`}>Resume</CustomLink>
        </ul>
    </nav>
}
function Scrolls() {
    window.scrollTo(0, 500);
    console.log("scrolling");
}
function CustomLink({ to, children, ... props}) {

    const resolvedPath = useResolvedPath(to)
    
    let isActive = useMatch({ path: resolvedPath.pathname, end: false})

    const path = window.location.hash

    console.log(window.location.hash);
    if (path === "#/work/7") {
        id = 7;
        document.location = "#/work/27";
        Scrolls();
        return;
    } else if (path === "#/home/27") {
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