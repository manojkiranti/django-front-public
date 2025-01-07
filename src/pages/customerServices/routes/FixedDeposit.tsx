import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card, Dropdown, Space } from "antd";
import { FixedDepositType } from "../types";
import { fixedDepositSchema } from "../schema";
import { InputField, SelectField } from "@/components/Form";

import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";
import { customerSericesMenu } from "../constant";
import { Link } from "react-router-dom";
import useOtpModal from "@/hooks/useOtpModal";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const FixedDeposit = () => {
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
  } = useForm<FixedDepositType>({
    defaultValues: {
        interestRate:"3.5"
    },
    resolver: yupResolver(fixedDepositSchema),
  });

  console.log(errors)

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: FixedDepositType) => {
    if (!captchaValue) {
        messageApi.error("Please complete the reCAPTCHA to submit the form.")
        return;
      }
      postCustomerRequest({action:"fixed_deposit", data}).unwrap()
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
                <Dropdown menu={{items:customerSericesMenu}}>
                  <a href="#" onClick={e => e.preventDefault()}>
                    <Space>
                        Customer Services
                       <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
             </Breadcrumb.Item>

             <Breadcrumb.Item>
                Fixed Deposit
            </Breadcrumb.Item>
          </Breadcrumb>
        
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
         <Card title="Fixed Deposit">
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
                      label="Mobile Number"
                      name="mobileNumber"
                      control={control}
                      error={errors.mobileNumber?.message ?? ""}
                      placeholder="Enter you registered mobile number"
                      size="large"
                      required={true}
                    />
                  </Col>
                  
                 
                  <Col xs={24} md={8}>
                    <InputField
                      label="Email"
                      name="email"            
                      control={control}
                      error={errors.email?.message ?? ""}
                      placeholder="Email"
                      size="large"
                      required={true}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <SelectField
                      options={[
                        {
                            label: "Inside Country",
                            value: "inside_country"
                        },
                        {
                            label: "Outside Country",
                            value: "outside_country",
                        }
                      ]}
                      label="Applying From"
                      name="applyingFrom"
                      control={control}
                      error={errors.applyingFrom?.message ?? ""}
                      placeholder="Applying From"
                      size="large"
                      required={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <SelectField
                      options={Array.from({ length: 139 }, (_, index) => ({
                        label: (index + 2).toString(),  // labels will be from 2 to 140
                        value: (index + 2).toString()   // values will be from 2 to 140
                      }))}
                      label="Tenure(In Months)"
                      name="tenureMonths"
                      control={control}
                      error={errors.tenureMonths?.message ?? ""}
                      placeholder="Tenure in months"
                      size="large"
                      required={true}
                      showSearch={true}
                    />
                  </Col>
                  
                  <Col xs={24} md={8}>
                    <InputField
                      label="Deposit Amount"
                      name="depositAmount"            
                      control={control}
                      error={errors.depositAmount?.message ?? ""}
                      placeholder="Amount"
                      size="large"
         
                      type="number"
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Interest Rate"
                      name="interestRate"            
                      control={control}
                      error={errors.interestRate?.message ?? ""}
                      placeholder="Interest Rate"
                      size="large"
                      required={true}
                      readonly={true}
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

export default FixedDeposit;
