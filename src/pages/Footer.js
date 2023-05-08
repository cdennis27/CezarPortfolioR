import React from 'react';
import gitHubWhite from '../assets/images/githubwhite.png';
import lilogo from '../assets/images/lilogo.png';
import stackExchange from '../assets/images/stackExchange.png';
import { useResolvedPath, useMatch } from "react-router-dom"

export default function Footer() {





    return (
        <footer>
            <ContactActive className="footer">
                <h3>Contact</h3>
                <h3>Phone: (647) 627-0815 <a className="hover" href="mailto:cezardenis20@gmail.com">Email: cezardenis20@gmail.com</a></h3>
                <h3>
                    <a href="https://github.com/cdennis27"><img src={gitHubWhite} alt="git hub icon"/></a>
                    <a href="https://www.linkedin.com/in/cezar-amaral-203414251/"><img src={lilogo} alt="linkedin icon"/></a>
                    <a href="https://stackoverflow.com/users/21397024/cdennis27"><img src={stackExchange} alt="stack exchange icon"/></a>
                </h3>
            </ContactActive>
        </footer>
    );
}


function ContactActive({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    let contactPage = false;
    let isContact = useMatch({ path: resolvedPath.pathname, end: false })
    console.log(isContact.pathname);

    if (isContact.pathname === "/contact/7") {
        
        contactPage = true;
        console.log(contactPage);
    }
    console.log(contactPage);

    return (
        <div className={contactPage ? "footer hidden" : "footer"}>
            {children}
        </div>
    )


}