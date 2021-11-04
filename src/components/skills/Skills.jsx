import PortfolioList from "../portfolioList/PortfolioList";
import "./skills.scss";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  contentPortfolio,
  designPortfolio,
  mobilePortfolio
} from "../../data";

export default function Skills() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      {/* <div>
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
      </div>  */}

      <div className="container">
        {data.map((d) => (
        <a href={d.link}>
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>

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