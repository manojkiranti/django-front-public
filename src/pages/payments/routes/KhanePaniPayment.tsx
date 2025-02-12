import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message,  Card } from "antd";

import { InputField, SelectField } from "@/components/Form";

import { khanePaniSchema } from "../schema";
import { KhanePaniFormType } from "../types";

const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;

const KhanePaniPayment = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

      
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<KhanePaniFormType>({
    defaultValues: {},
    resolver: yupResolver(khanePaniSchema),
  });

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: KhanePaniFormType) => {
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
                    <SelectField
                            options={[
                                {
                                    label: "Baneshwore",
                                    value: "baneshwore"
                                },
                                {
                                    label: "Bhaktapur",
                                    value: "bhaktapur"
                                }
                            ]}
                            label="Branch"
                            name="branch"
                            control={control}
                            error={errors.branch?.message ?? ''}     
                            size="large"
                    />
                  </Col>
                  <Col xs={24} md={8}>
                    <SelectField
                            options={[
                                {
                                    label: "Customer Number",
                                    value: "customer_number"
                                },
                                {
                                    label: "Connection Number",
                                    value: "connection_number"
                                }
                            ]}
                            label="Choose Customer No / Connection No"
                            name="customerNo"
                            control={control}
                            error={errors.customerNo?.message ?? ''}     
                            size="large"
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Customer No / Connection No"
                      name="id"
                      control={control}
                      error={errors.id?.message ?? ""}
                      placeholder="Enter customer number or connection no"
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

export default KhanePaniPayment;
