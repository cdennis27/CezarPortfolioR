import { Link, useResolvedPath, useMatch } from "react-router-dom"
import React, { useState } from "react"
let id = 7;
export default function Navbar() {
    const path = window.location.pathname
    const [ scrolled, setScrolled ] = useState(false);


    const changeNavButtons = () => {
        //console.log(window.scrollY)
        if (window.scrollY === 1000) {
            setScrolled(false);
        } else if (window.scrollY >= 60) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }

    }

    window.addEventListener("scroll", changeNavButtons);

    return <nav className="nav">
        
        <ul className={scrolled ? "scrolled" : ""}>
            <CustomLink to={`/home`} onClick={() => scrolls(0)} >Home</CustomLink>

            <CustomLink to={"/work"}>Work</CustomLink>
                
            <CustomLink to={`/about`}>About</CustomLink>

            <CustomLink to={`/contact`}>Contact</CustomLink>

            <CustomLink to={`/resume`}>Resume</CustomLink>

            <CustomLink to={`/projects`}>Projects</CustomLink>
        </ul>
    </nav>
}
function scrolls(x) {
    window.scroll({top:x, left:0, behavior: "smooth"});
    //console.log("scrolling");
    //console.log(x);
}
function CustomLink({to, children, ...props}) {

    const resolvedPath = useResolvedPath(to)
    
    let isActive = useMatch({ path: resolvedPath.pathname, end: false})

    const path = window.location.hash

    //console.log(window.location.hash);
    if (path === "#/work/7") {
        id = 7;
        document.location.hash = "#/work/27";
        scrolls();
        return;
    } else if (path === "#/home/27") {
        id = 27;
    } else {
        id = 7;
    }
    
    //console.log(id);

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={`${to}/${id}`} {...props}>{children}</Link>
        </li>

    )
    
}