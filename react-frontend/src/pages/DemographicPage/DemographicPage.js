import React, { useState } from 'react';

import "./index.css";

import { request } from '../../utils/request.js';
import { Button, Form, Input, Select} from "antd";
import {Api} from "../../config/api";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 12,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 12,
  },
};

const formItemLayout = {
    labelCol: {
        span: 12,
    },
    wrapperCol: {
        span: 12,
    },
};

const DemographicPage = () => {
    const [form] = Form.useForm();

    const handleFormSubmit = async () => {
        await form.validateFields()
            .then((values) => {
                    let url = `${Api}/userDemographic?userID=` + localStorage.getItem("user-id");
                    request({ url: url, method: "POST", data: values})
                        .then((res) => {
                            console.log(res);
                            window.location.assign("/#/instructions")
                        });
            })
            .catch((errorInfo) => {});
    };

    return (
        <>
            <Form {...formItemLayout} form ={form} layout='vertical'>
                <Form.Item
                    name="age"
                    label="Age"
                    rules={[{
                        required: true,
                    },
                    ]}>
                    <Select>
                        <Select.Option value="1">18-24</Select.Option>
                        <Select.Option value="2">25-29</Select.Option>
                        <Select.Option value="3">30-34</Select.Option>
                        <Select.Option value="4">35-39</Select.Option>
                        <Select.Option value="5">40-44</Select.Option>
                        <Select.Option value="6">45-49</Select.Option>
                        <Select.Option value="7">50 or older</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      placeholder="Select a option and change input text above"
                      allowClear
                    >
                        <Select.Option value="male">male</Select.Option>
                        <Select.Option value="female">female</Select.Option>
                        <Select.Option value="none">prefer not to say</Select.Option>
                        <Select.Option value="other">other</Select.Option>
                    </Select>
                </Form.Item>


                <Form.Item
                    name = "education"
                    label="Education Level"
                    rules={[{
                        required: true,
                    },
                    ]}>
                    <Select>
                        <Select.Option value="1">Up to high school</Select.Option>
                        <Select.Option value="2">High school Graduate</Select.Option>
                        <Select.Option value="3">In college</Select.Option>
                        <Select.Option value="4">College Graduate</Select.Option>
                        <Select.Option value="5">In graduate school</Select.Option>
                        <Select.Option value="6">Completed graduate school</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item name ="rate" label="On a scale from 1 (not familiar at all) to 5 (have a complete understanding) please rate your level of familiarity with the term Artificial Intelligence:"
                    rules={[{
                        required: true,
                    },
                    ]}>
                    <Select>
                        <Select.Option value="1">1 (Not at all familiar)</Select.Option>
                        <Select.Option value="2">2 (Slightly familiar)</Select.Option>
                        <Select.Option value="3">3 (Somewhat familiar)</Select.Option>
                        <Select.Option value="4">4 (Moderately familiar)</Select.Option>
                        <Select.Option value="5">5 (Extremely familiar)</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button onClick={handleFormSubmit}>Submit</Button>
                </Form.Item>

            </Form>

        </>
    );
};

export default DemographicPage;
