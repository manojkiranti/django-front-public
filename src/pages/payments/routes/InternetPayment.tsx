import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message,  Card } from "antd";

import { InputField } from "@/components/Form";

import { internetSchema } from "../schema";
import { InternetType } from "../types";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const InternetPayment = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InternetType>({
    defaultValues: {},
    resolver: yupResolver(internetSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: InternetType) => {
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
         <Card title={id ?? "internet"}>
             <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                  <Col xs={24} md={8}>
                    <InputField
                      label="username"
                      name="username"
                      control={control}
                      error={errors.username?.message ?? ""}
                      placeholder="Enter your internet username"
                      size="large"
                      required={true}
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

export default InternetPayment;
