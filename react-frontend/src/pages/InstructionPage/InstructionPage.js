import React, { useState } from 'react';

import { startReq } from '../../utils/request.js';
import { Button, Checkbox, message, Typography, Row} from "antd";

import "./css/instructionPage.css";

const baseImgUrl = "/static/img/";

const { Title,  Text } = Typography;

const InstructionPage = () => {

    const next = () => {
        window.location.assign("/#/trialPage")
    };

    return (
        <div className="page-container">
          <Title level={3}>Instructions</Title>
            <Row>
                <Text level={5}> Welcome to counting penguins in the wild! Monitoring changes in penguin population is important for wildlife conservation. The Penguin Watch project has captured images of penguin colonies in Antarctica with fixed cameras in more than 30 locations for several years. To track the colony sizes, the number of penguins in each image is required. Your task today is to count penguins with the assistance of an artificial intelligence (AI) agent. The AI agent has been previously exposed to other images with penguins (different from the ones you will see), and has been trained to predict the number of penguins.
                </Text>
            </Row>

            <Row>
                <Text level={5}> The order of the instructions you have to follow is:
                </Text>
            </Row>

            <Row>
                <Text level={5}> 1. Attentively observe the image
                </Text>
            </Row>

            <Row>
                <Text level={5}> 2. Provide your best estimate on the number of penguins that you saw
                </Text>
            </Row>

            <Row>
                <Text level={5}> 3. Read the suggestion provided by the AI (Note that this AI agent is not perfect)
                </Text>
            </Row>

            <Row>
                <Text level={5}> 4. Provide a final answer
                </Text>
            </Row>

            <Row>
                <Text level={5}> 5. Complete the post study survey
                </Text>
            </Row>

            <Row>
                <Text level={5}> Be aware of the countdown timers to complete each instruction! These will appear and start counting immediately.
                </Text>
            </Row>

            <Row>
                <Text level={5}> Remember to consider penguins that are occluded, cut by the corners of the image, in different poses or appearances in your count estimation. See the following image for a reference:
                </Text>
            </Row>

            <Row>
                <div className="img-frame">
                  <img src={baseImgUrl + "example.jpeg"}></img>
                </div>
            </Row>

            <Row>
                <Text level={5}> Now, click next to do a test run for the task.
                </Text>
            </Row>

             <Row>
                <div>
                    <Button
                        type="primary"
                        size="medium"
                        style={{ margin: '0 10px' }}
                        onClick={() => next()}
                    >
                        Next
                    </Button>
                </div>
             </Row>
        </div>
    );
};

export default InstructionPage;
