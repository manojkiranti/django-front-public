import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message,  Card } from "antd";

import { InputField } from "@/components/Form";

import { electricitySchema } from "../schema";
import { ElectricityFormType } from "../types";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const Electricity = () => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ElectricityFormType>({
    defaultValues: {},
    resolver: yupResolver(electricitySchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: ElectricityFormType) => {
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
         <Card title="Electricity">
             <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={30}>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Counter"
                      name="counter"
                      control={control}
                      error={errors.counter?.message ?? ""}
                      placeholder="Counter"
                      size="large"
                      required={true}
       
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="SC Number"
                      name="scNumber"
                      control={control}
                      error={errors.scNumber?.message ?? ""}
                      placeholder="Enter SC Number"
                      size="large"
                      required={true}
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <InputField
                      label="Counter ID"
                      name="counterID"
                      control={control}
                      error={errors.counterID?.message ?? ""}
                      placeholder="Enter Counter ID"
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

export default Electricity;
