import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { MENU_ITEMS } from "@/devFrontData/menu";
import {
  faMobile,
  faHeadset,
  faCreditCard,
  faUserHairMullet,
  faMoneyBill,
  faBook,
  faHome
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
const ResponsiveMenu = () => {
    const navigate =  useNavigate();
    const onChange = (key: string) => {
        const currentMenu = MENU_ITEMS.find(menu => menu.key === key);
        navigate(currentMenu?.link as string);
      };
      
      const items: TabsProps['items'] = [
        {
          key: '0',
          label: 'Home',
          icon: <FontAwesomeIcon icon={faHome} />
        },
        {
          key: '1',
          label: 'Mobile Banking',
          icon: <FontAwesomeIcon icon={faMobile} />
        },
        {
          key: '2',
          label: 'Card',
          icon: <FontAwesomeIcon icon={faCreditCard} />
        },
        {
          key: '3',
          label: 'Customer Service',
          icon: <FontAwesomeIcon icon={faHeadset} />
        },
        {
          key: '4',
          label: 'Teller',
          icon: <FontAwesomeIcon icon={faUserHairMullet} />
        },
        {
          key: '5',
          label: 'Loans',
          icon: <FontAwesomeIcon icon={faMoneyBill} />
        },
        {
          key: '6',
          label: 'Documents',
          icon: <FontAwesomeIcon icon={faBook} />,
          
        },
      ];

    return (
        <div className="responsive-menu">
             <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabPosition="bottom"  />
        </div>
    );
};

export default ResponsiveMenu;