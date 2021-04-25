import React, { useState } from 'react';

import "./index.css";

import { request } from '../../utils/request.js';
import { Button, Checkbox, message, Typography, Form, Input, Select} from "antd";
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

const { Title,  Text } = Typography;

const DemographicPage = () => {

    const onFinish = (values) => {
        let url = `${Api}/userDemographic`;
        request({ url: url, method:"POST"})
        .then(response => response.json())
        .then(
          res => {
            console.log('Success:', values);
            window.location.assign("/#/trailPage")
          }
        );
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form {...formItemLayout} layout='vertical' onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
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

            <Form.Item noStyle
                shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
            >
                {({ getFieldValue }) =>
                    getFieldValue('gender') === 'other' ? (
                    <Form.Item
                      name="customizeGender"
                      label="Customize Gender"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                        <Input />
                    </Form.Item>
                    ) : null
                }
            </Form.Item>

            <Form.Item
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

            <Form.Item
                label="On a scale from 1 (not familiar at all) to 5 (have a complete understanding) please rate your level of familiarity with the term Artificial Intelligence:"
                rules={[{
                    required: true,
                },
                ]}
            >
                <Select>
                    <Select.Option value="1">1 (Not at all familiar)</Select.Option>
                    <Select.Option value="2">2 (Slightly familiar)</Select.Option>
                    <Select.Option value="3">3 (Somewhat familiar)</Select.Option>
                    <Select.Option value="4">4 (Moderately familiar)</Select.Option>
                    <Select.Option value="5">5 (Extremely familiar)</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    );
};

export default DemographicPage;
