import WORLDLINK from "@/assets/images/internet/world_link.png";
import ADSL from "@/assets/images/internet/adsl.png";
import SUBISU from "@/assets/images/internet/subisu.png";
import { Card, Flex, Typography } from "antd";
import { Link } from "react-router-dom";

const internetList = [
  {
    link: "world-link",
    icon: WORLDLINK,
    title: "World Link",
  },
  {
    link: "adsl",
    icon: ADSL,
    title: "ADSL",
  },
  {
    link: "subisu",
    icon: SUBISU,
    title: "Subisu",
  },
];
const Internet = () => {
  return (
    <>
      <Card title="Internet" bordered={false}>
        <Flex gap={20}>
          {internetList.map((internet) => {
            return (
        
                <Link to={internet.link} key={internet.link} style={{border:"1px solid rgb(230, 226, 226)", padding:"1rem", borderRadius:"5px"}}>
                  <img
                    src={internet.icon}
                    alt={internet.title}
                    style={{ width: "100%", maxWidth: "140px" }}
                  />
                </Link>
          
            );
          })}
        </Flex>
      </Card>
    </>
  );
};

export default Internet;
