import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { Col, Row, Tabs, Grid } from "antd";
import { documentVerificationServices } from "@/pages/home/constant";
import { Container } from "@/components/Elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BankGuranteeVerification from './BankGuranteeVerification';

const {useBreakpoint} = Grid;
export const DocumentVerificationRoutes = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
    const location = useLocation();
  
    const handleTabChange = (key: string) => {
      navigate(key);
    };
    const activeKey =
    documentVerificationServices.find((service) => location.pathname.endsWith(service.link))
        ?.link || documentVerificationServices[0].link;
    const tabPosition = screens.md ? "left" : "top";
    return (
      <Container>
      <Row>
        <Col xs={24} md={24}>
          <Tabs
            activeKey={activeKey}
            tabPosition={tabPosition}
            // style={{ height: "calc(100vh - 520px)" }}
            onChange={handleTabChange}
            items={documentVerificationServices.map(service => ({
              label: (
                <span>
                  <FontAwesomeIcon icon={service.icon} style={{ marginRight: 8 }} />
                  {service.title}
                </span>
              ),
              key: service.link, // Use relative path as key
              children:       <Routes>
              <Route path="bank-guarantee" element={<BankGuranteeVerification />} />
              <Route path="*" element={<Navigate to={documentVerificationServices[0].link} replace />} />
            </Routes>
            }))}
          />

          {/* Define nested routes */}
    
        </Col>
      </Row>
    </Container>
      
    );
  };