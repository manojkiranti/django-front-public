import KUKL from "@/assets/images/payments/kukl.png";

import { Card, Flex } from "antd";
import { Link } from "react-router-dom";

const serviceList = [
  {
    link: "kukl",
    icon: KUKL,
    title: "KUKL",
  }
];
const KhanePani = () => {
  return (
    <>
      <Card title="khanipani" bordered={false}>
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

export default KhanePani;
