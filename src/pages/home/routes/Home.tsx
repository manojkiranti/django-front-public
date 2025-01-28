import { Container, ServiceBox } from "@/components/Elements";
import { Col, Flex, Row, Typography } from "antd";

import {
  cardServices,
  
  customerServices,
  documentVerificationServices,
  loanServices,
  mobileBankingServices,
  
  paymentServices,
  
  tellerServices,
} from "../constant";
import { ReactNode } from "react";
import Banner from "../components/Banner";

export const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Typography.Title level={3} style={{ marginBottom: "1.5rem", textAlign:"center" }}>
      {children}
    </Typography.Title>
  );
};
const Home = () => {
  return (
    <>
     <Container>
            {/* <Row>
              <Col xs={24}>
                 <Banner />
              </Col>
            </Row> */}
            <Row>
              <Col xs={24}>
                <SectionHeading>Payments</SectionHeading>
              </Col>
            </Row>
            <Flex gap={20} wrap="wrap" >
              {paymentServices.map((service) => {
                return (
                  <div className="flex-column" key={service.key}>
                    <ServiceBox
                      icon={service.icon}
                      title={service.title}
                      link={service.link}
                      offer={service.offer}
                    />
                  </div>
                );
              })}
            </Flex>


            
          </Container>
    </>
  );
};

export default Home;
