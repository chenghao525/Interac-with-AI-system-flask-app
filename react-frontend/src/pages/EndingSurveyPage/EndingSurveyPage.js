import React from 'react';

import "./index.css";

import { request } from '../../utils/request.js';
import { Button, Form, Input, Radio, Checkbox} from "antd";
import {Api} from "../../config/api";

const formItemLayout = {
    labelCol: {
        span: 22,
        offset:1,
    },
    wrapperCol: {
        span: 22,
        offset:1,
    },
};

const EndingSurveyPage = () => {
    const [form] = Form.useForm();

    const options = [
        { label: 'Used Finger to Trace Screen and Count', value: 'Finger' },
        { label: 'Counted one by one', value: 'One' },
        { label: 'Counted two by two', value: 'Two' },
        { label: 'Counted five by five', value: 'Five' },
        { label: 'Did not count and made rough estimate', value: 'Estimate'},
        { label: 'Made random initial guess', value: 'Random'},
        { label: 'Other', value: 'Other'},
    ];

    const handleFormSubmit = async () => {
        await form.validateFields()
            .then((values) => {
                    let url = `${Api}/userSurveyData?userID=` + localStorage.getItem("user-id");
                    request({ url: url, method: "POST", data: values})
                        .then((res) => {
                            console.log(res);
                            window.location.assign("/#/end")
                        });
            })
            .catch((errorInfo) => {});
    };

    return (
        <div style={{margin:"4% 10%"}}>
        <div style={{fontSize:"30px", marginBottom:"20px"}}>Final Survey</div>
            <Form {...formItemLayout} form ={form} layout='vertical'>
                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q1"
                    label="I trusted the AI agent's suggestions"
                    rules={[{
                        required: true,
                    },
                    ]}>
                    <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q2"
                    label="The AI agent's suggestions were useful"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q3"
                    label="The AI agent made reasonable suggestions"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q4"
                    label="I could tell when the AI agent made an unreasonable suggestion"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q5"
                    label="I had sufficient time to contrast my initial guess with the AI agent’s suggestions"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q6"
                    label="I would not be able to accurately complete the task without the AI agent"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q7"
                    label="I contributed more to the task than the AI agent"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    style={{fontWeight:"bold"}}
                    name="q8"
                    label="I would use this AI agent for future counting tasks"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1">1 (strongly disagree)</Radio>
                        <Radio value="2">2 (disagree)</Radio>
                        <Radio value="3">3 (neither agree nor disagree) </Radio>
                        <Radio value="4">4 (agree) </Radio>
                        <Radio value="5">5 (strongly agree) </Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                style={{fontWeight:"bold"}}
                    name="q9"
                    label="Your overall performance on the task was 75%. Who do you blame for the mistakes?"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                   <Radio.Group style={{fontWeight:"normal"}}>
                        <Radio value="1"> Myself </Radio>
                        <Radio value="2"> The AI Agent </Radio>
                        <Radio value="3"> Both  </Radio>
                        <Radio value="4"> No One </Radio>
                    </Radio.Group>
                </Form.Item>
                
                <Form.Item
                
                    name="q10"
                    label="What strategy did you use for estimating the number of penguins (may select multiple and write your own)?"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                    style={{margin:"0% 15%",fontWeight:"bold"}}
                  >
                    <Checkbox.Group style={{fontWeight:"normal"}} options={options} defaultValue={['Other']}/>
                </Form.Item>

                <Form.Item
             
                    name="q11"
                    label="What other strategies did you use for estimating the number of penguins?"
                    style={{marginTop:"20px",fontWeight:"bold"}}
                  >
                    <Input/>
                </Form.Item>

                <Form.Item>
                    <Button style={{marginBottom:"50px"}} onClick={handleFormSubmit}>Submit</Button>
                </Form.Item>

            </Form>

        </div>
    );
};

export default EndingSurveyPage;
