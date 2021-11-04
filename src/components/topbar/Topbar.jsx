import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import { FaLinkedin } from "react-icons/fa";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        //if menuOpen is true make topbar active
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Ayomide.</a>
                    <a href="https://www.linkedin.com/in/ayomide-akinremi" target="_blank">
                        <div className="itemContainer">
                            <FaLinkedin className="icon" />
                            <span>Ayomide Akinremi</span>
                        </div>
                    </a>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>akinremiomoyisola@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}