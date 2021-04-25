import React, { useState } from 'react';

import { startReq } from '../../utils/request.js';
import { Button, Checkbox, message, Typography} from "antd";

import "./css/lastPage.css";

const { Title,  Text } = Typography;

const LastPage = () => {

    return (
        <div className="page-container">
          <Title level={3}>Thank you for Completing the Study </Title>
        </div>
    );
};

export default LastPage;
