

import { Card, Flex } from "antd";
import { Link } from "react-router-dom";
import NEPALLIFE from "@/assets/images/payments/nepal-life.png";
import IME from "@/assets/images/payments/ime.png";
import RELIABLE from "@/assets/images/payments/reliable-logo.png";
import SURYAJYOTI from "@/assets/images/payments/suryajyoti.png";

const serviceList = [
  {
    link: "nepal-life",
    icon: NEPALLIFE,
    title: "Nepal Life Insurance",
  },
  {
    link: "ime",
    icon: IME,
    title: "IME",
  },
  {
    link: "reliable",
    icon: RELIABLE,
    title: "Reliable Life Insurance",
  },
  {
    link: "suryajyoti",
    icon: SURYAJYOTI,
    title: "Surya Jyoti",
  }
];
const Insurance = () => {
  return (
    <>
      <Card title="Insurance" bordered={false}>
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

export default Insurance;
