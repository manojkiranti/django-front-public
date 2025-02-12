import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message,  Card } from "antd";

import { InputField } from "@/components/Form";

import { landlinePaymentSchema } from "../schema";
import { LandLineFormType } from "../types";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const LandLinePayment = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LandLineFormType>({
    defaultValues: {},
    resolver: yupResolver(landlinePaymentSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: LandLineFormType) => {
    if (!captchaValue) {
        messageApi.error("Please complete the reCAPTCHA to submit the form.")
        return;
      }

     
  };

  return (
    <>
    {contextHolder}
      <Row>
        <Col xs={24}>
         <Card title="Landline">
             <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Landline Number"
                      name="landlineNumber"
                      control={control}
                      error={errors.landlineNumber?.message ?? ""}
                      placeholder="Enter your landline number"
                      size="large"
                      required={true}
       
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Amount"
                      name="amount"
                      control={control}
                      error={errors.amount?.message ?? ""}
                      placeholder="Enter amount"
                      size="large"
                      required={true}
                      type="number"
                    />
                  </Col>
  
                  
                  <Col xs={24}>
                    <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
                  </Col>
                  
                </Row>
                <Col xs={24} style={{marginTop:"1rem"}}>
                  <Button type="primary" htmlType="submit" size="large" className="form-btn" >
                    Get Details
                  </Button>
                </Col>
              </form>
         </Card>
             
          
        </Col>
      </Row>


    </>
  );
};

export default LandLinePayment;
