import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "@/components/Elements";
import { Button, Col, Row, message, Breadcrumb, Card, Dropdown, Space } from "antd";

import { InputField, SelectField } from "@/components/Form";
import { DownOutlined, HomeOutlined } from "@ant-design/icons";
import { useCustomerServiceRequestMutation } from "@/store/apis/coreApi";
import { displayError } from "@/utils/displayMessageUtils";

import { LoanFormType } from "../types";
import { loanSchema } from "../schema";
import { loanMenu } from "../constant";
import useOtpModal from "@/hooks/useOtpModal";
import { replaceHyphenWithUnderscore } from "@/utils/commonUtils";
import { error } from "console";
const siteKey = import.meta.env.VITE_CAPTCHA_SITE_KEY;


const PersonalLoan = () => {
    const navigate = useNavigate();
    const { loantype } = useParams<{ loantype: string }>();
    const [messageApi, contextHolder] = message.useMessage();
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [serviceId, setServiceId] = useState<string | null>(null);
    const [serviceRefNumber, setServiceRefNumber] = useState<string | null>(null);
    const [postCustomerRequest, { isLoading }] =
    useCustomerServiceRequestMutation();
    
    const loanTitles: Record<string, string> = {
        "home-loan": "Home Loan",
        "car-loan": "Car Loan",
        "gold-loan": "Gold Loan",
        "loan-against-share": "Loan Against Share",
        "credit-card-loan": "Credit Card"
    };

    const loanServiceTypes: Record<string, string> = {
      "home-loan": "HOME_LOAN",
      "gold-loan": "GOLD_LOAN",
      "loan-against-share": "LOAN_AGAINST_SHARE",
  };
    
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoanFormType>({
    defaultValues: {},
    resolver: yupResolver(loanSchema),
  });
  console.log(errors)
  useEffect(() => {
    if(loantype) {
        setValue("loanType", loantype)
    }   
  },[loantype]);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const onSubmit = (data: LoanFormType) => {
    if (!captchaValue) {
        messageApi.error("Please complete the reCAPTCHA to submit the form.")
        return;
      }
      postCustomerRequest({accountName: data.accountNumber, accountNumber: data.accountNumber, phone: data.phone,
        prop_values:{...data}, product:'LOAN', service_type:loanServiceTypes[data.loanType]}).unwrap()
      .then(response => {
        setServiceId(response.data.service_type)
        setServiceRefNumber(response.data.ref_number)
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
    refNumber: serviceRefNumber,
    handleServiceSubmission: handleServiceSubmission
  });
  return (
    <>
    {contextHolder}

    <Container width="sm">

  
      <Row>
        <Col xs={24}>
         <Card title={loanTitles[loantype || ""] || "Loan"}>
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
                      name="phone"
                      control={control}
                      error={errors.phone?.message ?? ""}
                      placeholder="Enter you registered mobile number"
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
                            {label:"Home Loan", value:"home-loan"},
                            {label:"Gold Loan", value:"gold-loan"},
                            {label:"Loan Against Share", value:"loan-against-share"},
                        ]}
                        name="loanType"
                        control={control}
                        label="Loan Type"
                        disabled={true}
                        size="large"
                        placeholder="Select Loan Type"
                        error={errors.loanType?.message ?? ''}
                        required={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Loan Amount"
                      name="loanAmount"            
                      control={control}
                      error={errors.loanAmount?.message ?? ""}
                      placeholder="Loan Amount"
                      type="number"
                      size="large"
                      required={true}
                    />
                  </Col>

                  <Col xs={24} md={8}>
                    <InputField
                      label="Payback Period(in Years)"
                      name="paybackPeriod"            
                      control={control}
                      error={errors.paybackPeriod?.message ?? ""}
                      placeholder="Payback Period"
                      type="number"
                      size="large"
                      required={true}
                      suffix="yrs"
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

export default PersonalLoan;
