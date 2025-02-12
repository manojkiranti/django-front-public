

import { Card, Flex } from "antd";
import { Link } from "react-router-dom";
import NETTV from "@/assets/images/payments/nettv.png";
import DISHHOME from "@/assets/images/payments/dishhome.png";
import MEROTV from "@/assets/images/payments/merotv.png";
import MAXTV from "@/assets/images/payments/maxtv.png";

const serviceList = [
  {
    link: "nettv",
    icon: NETTV,
    title: "NET TV",
  },
  {
    link: "dishhome",
    icon: DISHHOME,
    title: "DISH HOME",
  },
  {
    link: "merotv",
    icon: MEROTV,
    title: "MERO TV",
  },
  {
    link: "maxtv",
    icon: MAXTV,
    title: "MAX TV",
  }
];
const Television = () => {
  return (
    <>
      <Card title="Television" bordered={false}>
        <Flex gap={20}>
          {serviceList.map((service) => {
            return (
        
                <Link to={service.link} key={service.link} style={{border:"1px solid rgb(230, 226, 226)", padding:"1rem", borderRadius:"5px"}}>
                  <img
                    src={service.icon}
                    alt={service.title}
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

export default Television;
