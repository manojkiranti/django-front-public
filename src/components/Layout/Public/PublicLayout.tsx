import { FC, ReactNode } from 'react';

import { Grid } from 'antd';

// import APPS from "@/assets/images/apps.jpg";
import APPS from "@/assets/images/app-digital.jpg";
import Assistant from '../Assistant';
import Banner from '../Banner';
import NavBar from '../Navbar';
import PublicHeader from './PublicHeader';
import ResponsiveMenu from './ResponsiveMenu';

const { useBreakpoint } = Grid;

interface PublicLayoutProps {
  children: ReactNode;
}

const PublicLayout: FC<PublicLayoutProps> = ({ children }) => {
  const screens = useBreakpoint();
  return <div className="main-layout">
          <div className="main-body">
            <div className='banner-wrapper' style={{
              backgroundImage: `url(${APPS})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
        
              top: 0,
              left: 0,
              width: "100%",
              position:"relative",
              zIndex:1,
 
            }}>
                <PublicHeader />
                <Banner />
            </div>
            {screens.md && <NavBar />}
             {children}
             {!screens.md && <ResponsiveMenu />}
          </div>
          
         
          <div className="assistant-sidebar">
            <Assistant />
          </div>
    </div>;
};

export default PublicLayout;
