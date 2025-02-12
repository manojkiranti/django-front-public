import { Col, Flex, Row, Typography } from 'antd';
import { Grid } from 'antd';
import { LOGO, LOGO_WHITE } from '@/constant/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/pro-light-svg-icons';
import styles from './PublicLayout.module.scss';
import { Container } from '@/components/Elements';

const { useBreakpoint } = Grid;
const PublicHeader = () => {
    const screens = useBreakpoint();
  
     const handleViewAssistant = () => {
      document.body.classList.toggle('assistant-open');
    }
    return (
      <header className={styles.publicHeader}>
        <Container >
          <Row gutter={30} align="middle">
            <Col md={11} xs={9}>
              <div className={styles.logoWrapper}>
                {screens.md && <img src={LOGO} alt="Odin Mortgage" />}
                {!screens.md && <img src={LOGO_WHITE} alt="Odin Mortgage" />}
              </div>
            </Col>
            <Col md={13} xs={15}>
              <Flex justify="flex-end">
                <div className='bankify-bot' onClick={handleViewAssistant}>
                  <FontAwesomeIcon icon={faRobot} />
                  <Typography style={{color:"#fff", fontSize:"16px"}}>Ask Genie AI Assistant</Typography>
                </div>
              </Flex>
  
            </Col>
          </Row>
        </Container>
        
      </header>
    );
  };

  export default PublicHeader;