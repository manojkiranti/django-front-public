import { useGetPurchaseRequestListQuery } from '@/pages/mortgage/apis/purchaseAPI';
import { formatDate } from '@/utils/commonUtils';
import { FormOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Flex,
  Row,
  Col,
  Typography,
  Table,
  theme,
  Tag,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { purchaseFormRoutes } from '../constant/stepperRoutes';
import Meeting from '@/components/Meeting/Meeting';
import CalculatorListComponent from '@/components/Calculator/Calculator';
import useScrollToTop from '@/hooks/useScrollTop';

const { useToken } = theme;

const Purchase = () => {
  const navigate = useNavigate();
  const { token } = useToken();
  const { data: purchaseRequestList, isLoading: purchaseRequestListLoading } =
    useGetPurchaseRequestListQuery(undefined, {
      refetchOnMountOrArgChange: true,
    });

  const startPurchaseAssessment = () => {
    navigate('step/purchase-detail');
  };

  const columns: any = [
    {
      title: 'Application ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Current Stage',
      dataIndex: 'current_step_display',
      key: 'current_step',
      render: (_: any, record: any) => {
        const color = record.status === 'in_progress' ? 'orange' : 'green';
        const text =
          record.status === 'in_progress'
            ? record.current_step
            : 'All Completed';
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (
        _: any,
        { status, status_display }: { status: string; status_display: string },
      ) => {
        const color = status === 'in_progress' ? 'orange' : 'green';
        return <Tag color={color}>{status_display}</Tag>;
      },
    },
    {
      title: 'Request Date',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (_: any, { created_at }: { created_at: string | null }) => {
        if (!created_at) return null;
        return <div>{formatDate(created_at)}</div>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => {
        return (
          <>
            {record.status === 'in_progress' && (
              <Button
                size="small"
                type="primary"
                onClick={() =>
                  navigate(
                    `${purchaseFormRoutes[record.current_step]}/${record.id}`,
                  )
                }
              >
                Continue
              </Button>
            )}
            {record.status === 'submitted' && (
              <Flex gap={10}>
                {/* <Button size="small" type="primary">View Detail</Button> */}
                <Button
                  onClick={() =>
                    navigate(
                      `${purchaseFormRoutes['purchase_detail']}/${record.id}`,
                    )
                  }
                  size="small"
                  type="primary"
                >
                  Update Detail
                </Button>
              </Flex>
            )}
          </>
        );
      },
    },
  ];

  return (
    <>
      <Typography.Title level={4}>Your Mortgage Application</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card style={{ marginBottom: '1rem' }}>
            <Flex gap={20} align="center" style={{ marginBottom: '1rem' }}>
              <div>
                <FormOutlined style={{ fontSize: '20px' }} />
              </div>
              <Typography.Title style={{ margin: '0' }} level={4}>
                Pre-Assessment Form
              </Typography.Title>
            </Flex>
            <Typography.Paragraph>
              You can also apply for mortgages using Odin portal effortlessly.
              Simply click the button below to start your Mortgage Application.
            </Typography.Paragraph>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={startPurchaseAssessment}
            >
              Start
            </Button>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title="Purchase Applications">
            <Table
              dataSource={purchaseRequestList?.data}
              columns={columns}
              rowKey="id"
              loading={purchaseRequestListLoading}
              pagination={{
                pageSize: 5,
              }}
            />
          </Card>
        </Col>
        <Col xs={24} md={24} xl={12}>
          <Typography.Title level={3}>Book a Meeting</Typography.Title>
          <Meeting meetingUrl="https://meetings.hubspot.com/odin-mortgage/strategy-meeting-purchase?embed=true" />
        </Col>
        <Col xs={24} md={24} xl={12}>
          <Typography.Title level={3}>Calculator</Typography.Title>
          <CalculatorListComponent />
        </Col>
      </Row>
    </>
  );
};

export default Purchase;
