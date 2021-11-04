import { useState } from "react";
import "./works.scss"

export default function Works() {

    // creating use state for slider to know which of the three slides is the focus per time
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Qeola App",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img: "./assets/Qeola-App.png",
            link: "http://qeola-app.herokuapp.com/"
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Food Order App",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "./assets/React-foodApp.png",
            link: ""
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Swift Treat",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "assets/Swift-Treat.png",
            link: "https://yisola.github.io/SwiftTreat/"
        },
        {
            id: "4",
            icon: "./assets/writing.png",
            title: "Green Plug",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "assets/greenplug.png",
            link: "https://green-plug.netlify.app/"
        },
        {
            id: "5",
            icon: "./assets/writing.png",
            title: "Women's Accessories Store",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "assets/makeup.png",
            link: "https://yisola.github.io/e-commerce-practice/"
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
                                            <span>Projects</span>
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