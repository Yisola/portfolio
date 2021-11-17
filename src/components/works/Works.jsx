import { useState } from "react";
import "./works.scss"
import { FiExternalLink } from "react-icons/fi"

export default function Works() {

    // creating use state for slider to know which of the three slides is the focus per time
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Qeola App",
            desc: "A company website that interacts with a RESTful APi built using React.js, Bootstrap and HTML. ",
            img: "./assets/Qeola-App.png",
            link: "http://qeola-app.herokuapp.com/"
        },
        {
            id: "2",
            icon: "./assets/writing.png",
            title: "Women's Accessories Store",
            desc: "A functional e-Commerce website layout for female accesories built using React.js, Bootstrap and HTML.",
            img: "assets/makeup.png",
            link: "women-accessories-store.netlify.app"
        },
        {
            id: "3",
            icon: "./assets/globe.png",
            title: "Food Order App",
            desc: "A sample illustration of using React.js to handle a food order application.",
            img: "./assets/React-foodApp.png",
            link: "https://food-order-react-practice.herokuapp.com/"
        },
        {
            id: "4",
            icon: "./assets/writing.png",
            title: "Swift Treat",
            desc: "A static telemedicine landing page built using HTML, CSS and JQuery.",
            img: "assets/Swift-Treat.png",
            link: "https://yisola.github.io/SwiftTreat/"
        },
        {
            id: "5",
            icon: "./assets/writing.png",
            title: "Green Plug",
            desc: "A static green energy landing page built using Bootstrap, HTML and CSS.",
            img: "assets/greenplug.png",
            link: "https://green-plug.netlify.app/"
        },
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="worksContainer" id="works">
            <div className="worksHeader">
                <h3>{"</>"}</h3>
                <h2>A selection of some of my apps.</h2>
                <p>I am committed to building user-friendly, interactive websites and applications.
                    Here are a few I've had the pleasure of developing as practice exercises. Feel free to peruse them.</p>
            </div>

            <div className="works">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                >
                    {data.map((d) => (
                        <div className="container">
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={d.icon} alt="" />
                                        </div>
                                        <h2>{d.title}</h2>
                                        <p>{d.desc}</p>
                                        <a href={d.link} target="_blank">
                                        <div className="itemContainer">
                                            <span>View Project</span> 
                                            <FiExternalLink className="icon" />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="right">
                                    <a href={d.link} target="_blank">
                                        <img
                                            src={d.img}
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <img
                    src="assets/arrow.png"
                    className="arrow left" alt=""
                    onClick={() => handleClick("left")}
                />
                <img
                    src="assets/arrow.png"
                    className="arrow right"
                    alt=""
                    onClick={() => handleClick()} />
            </div >
        </div>

    );
}