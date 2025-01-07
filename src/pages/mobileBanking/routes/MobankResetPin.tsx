import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card, Dropdown, Space } from "antd";

import { InputField } from "@/components/Form";
import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { mobankMenuItems } from "../constant";
import { MobankResetPinType } from "../types";
import { mobankResetPinSchema } from "../schema";
import { Link } from "react-router-dom";
import useOtpModal from "@/hooks/useOtpModal";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const MobankResetPin = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [serviceId, setServiceId] = useState<string | null>(null);
    const [postCustomerRequest, { isLoading }] =
    useCustomerServiceRequestMutation();
      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MobankResetPinType>({
    defaultValues: {},
    resolver: yupResolver(mobankResetPinSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: MobankResetPinType) => {
    if (!captchaValue) {
        messageApi.error("Please complete the reCAPTCHA to submit the form.")
        return;
      }
      postCustomerRequest({action:"mobile_banking_reset_pin", data}).unwrap()
      .then(response => {
        setServiceId(response.data.pending_request_id)
        showOtpModal();
      }).catch(err => {
        displayError(err);
      })
  };

  const handleServiceSubmission = () => {
    navigate('/')
  };

  const { showModal: showOtpModal, OtpModalComponent } = useOtpModal({
    serviceId: serviceId,
    handleServiceSubmission: handleServiceSubmission
  });

  return (
    <>
    {contextHolder}

    <Container width="sm">

      <Row>
        <Col xs={24} style={{marginBottom:"2rem"}}>
         

          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">
                <HomeOutlined />
              </Link>
             </Breadcrumb.Item>

             <Breadcrumb.Item>
                <Dropdown menu={{items:mobankMenuItems}}>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <Space>
                       Mobile Banking Services
                       <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
             </Breadcrumb.Item>

             <Breadcrumb.Item>
                Reset Pin
            </Breadcrumb.Item>
          </Breadcrumb>
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Mobile Banking Reset Pin">
             <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Account Number"
                      name="accountNumber"
                      control={control}
                      error={errors.accountNumber?.message ?? ""}
                      placeholder="Enter your registered account number"
                      size="large"
                      required={true}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Account Name"
                      name="accountName"
                      control={control}
                      error={errors.accountName?.message ?? ""}
                      placeholder="Account Name"
                      size="large"
                      required={true}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Mobile Number"
                      name="mobileNumber"
                      control={control}
                      error={errors.mobileNumber?.message ?? ""}
                      placeholder="Enter you registered mobile number"
                      size="large"
                      required={true}
                    />
                  </Col>
                  
                  
                 
                  
                  <Col xs={24}>
                    <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
                  </Col>
                  
                </Row>
                <Col xs={24} style={{marginTop:"1rem"}}>
                  <Button type="primary" htmlType="submit" size="large" loading={isLoading} disabled={isLoading}>
                    Submit
                  </Button>
                </Col>
              </form>
         </Card>
             
          
        </Col>
      </Row>
    </Container>
    {OtpModalComponent}
    </>
  );
};

export default MobankResetPin;
