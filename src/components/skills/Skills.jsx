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
    </div>
  )
}