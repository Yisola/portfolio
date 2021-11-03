import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
// import { useEffect, useState } from "react";
// import {
//     qeolaApp,
//     swiftTreat,
//     greenPlug,
//     eCommerce,
//   } from "../../data";

export default function Portfolio() {
  // const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState([]);

  // const list = [

  //     {
  //         id: "web",
  //         title: "Qeola App",
  //         img: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"
  //     },
  //     {
  //         id: "mobile",
  //         title: "Swift Treat",
  //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"
  //     },
  //     {
  //         id: "design",
  //         title: "Green Plug",
  //         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
  //     },
  //     {
  //         id: "content",
  //         title: "e-Commerce Practice",
  //         img: "https://cdn.dribbble.com/users/5031392/screenshots/15467520/media/c36b3b15b25b1e190d081abdbbf947cf.png?compress=1&resize=1200x900"
  //     },
  // ];

  // useEffect( () => {
  //     switch (selected) {
  //         case "featured":
  //           setData(qeolaApp);
  //           break;
  //         case "web":
  //           setData(swiftTreat);
  //           break;
  //         case "mobile":
  //           setData(greenPlug);
  //           break;
  //         case "design":
  //           setData(eCommerce);
  //           break;
  //         case "content":
  //           setData(contentPortfolio);
  //           break;
  //         default:
  //           setData(featuredPortfolio);
  //       } 
  // }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <a href="http://qeola-app.herokuapp.com/">
          <div className="item">
            <img src="assets/qeola.png" alt="" />
            <h3>Qeola App</h3>
          </div>
        </a>
        <a href="https://yisola.github.io/e-commerce-practice/">
          <div className="item">
            <img src="assets/foodpractice.png" alt="" />
            <h3>Food Order App</h3>
          </div>
        </a>
        <a href="https://yisola.github.io/SwiftTreat/">
          <div className="item">
            <img src="assets/swifttreat.png" alt="" />
            <h3>Swift Treat</h3>
          </div>
        </a>
        <a href="https://green-plug.netlify.app/">
          <div className="item">
            <img src="assets/greenplug.png" alt="" />
            <h3>Green Plug</h3>
          </div>
        </a>
      </div>

      {/* <div className="container">
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
            </div>

            <div className="container">
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
            </div> */}
      {/* <ul>
              {list.map((item) => (
                  <PortfolioList 
                  title={item.title} 
                  active={selected === item.id}
                  setSelected={setSelected} 
                  id={item.id}
                  />
              ))}
            </ul> */}
      {/* <div className="container">
                {list.map((d) => (
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div> */}
    </div>
  )
}