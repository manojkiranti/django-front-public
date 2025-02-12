// MobankRoutes.tsx
import React, { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useNavigate, useLocation } from 'react-router-dom';

import { Col, Row, Tabs, Grid } from 'antd';
import { Container } from '@/components/Elements';
import { paymentServices } from '@/pages/home/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Ensure you have this import if using icons
import Topup from './Toup';
import Internet from './Internet';
import InternetPayment from './InternetPayment';
import Electricity from './Electricity';
import LandLinePayment from './LandLinePayment';
import KhanePani from './KhanePani';
import KhanePaniPayment from './KhanePaniPayment';
import Television from './Television';
import TelevisionPayment from './TelevisionPayment';
import Insurance from './Insurance';
import InsurancePayment from './InsurancePayment';

const { useBreakpoint } = Grid;
export const PaymentRoutes: React.FC = () => {
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle tab change by navigating to the selected route
  const handleTabChange = (key: string) => {
    navigate(key);
  };

  // Determine the active tab based on the current pathname
  const activeKey = paymentServices.find(service =>
    location.pathname.endsWith(service.link)
  )?.link || paymentServices[0].link;

  // // Redirect to the default tab if the current path doesn't match any service

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
            items={paymentServices.map(service => ({
              label: (
                <span>
                  <FontAwesomeIcon icon={service.icon} style={{ marginRight: 8 }} />
                  {service.title}
                </span>
              ),
              key: service.link, // Use relative path as key
              children:       <Routes>
              <Route path="topup" element={<Topup />} />
              <Route path="internet" element={<Internet />} />
              <Route path="internet/:id" element={<InternetPayment />} />
              <Route path="electricity" element={<Electricity />} />
              <Route path="landline" element={<LandLinePayment />} />
              <Route path="khanipani" element={<KhanePani />} />
              <Route path="khanipani/:id" element={<KhanePaniPayment />} />
              <Route path="television" element={<Television />} />
              <Route path="television/:id" element={<TelevisionPayment />} />
              <Route path="insurance" element={<Insurance />} />
              <Route path="insurance/:id" element={<InsurancePayment />} />
              {/* Redirect any unknown paths to the default route */}
              <Route path="*" element={<Navigate to={paymentServices[0].link} replace />} />
            </Routes>, // Placeholder for nested routes
            }))}
          />

          {/* Define nested routes */}
    
        </Col>
      </Row>
    </Container>
  );
};
