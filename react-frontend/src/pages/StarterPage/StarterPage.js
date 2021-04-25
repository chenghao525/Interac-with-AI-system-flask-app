import React, { useState } from 'react';

import { startReq } from '../../utils/request.js';
import { Button, Checkbox, message, Typography} from "antd";

import "./css/starterPage.css";

const { Title,  Text } = Typography;

const StarterPage = () => {

    const [consent, setConsent] = useState(false);

    const start = () => {
        if(consent === true){
            console.log("Start Study")
            startReq({ consent: 1}).then(window.location.assign("/#/demographic"))
        }
        else{
            message.warning('Need to give consent to participate in the study.');
        }
    };

    function onChange(e) {
        console.log(`consent = ${e.target.checked}`);
        setConsent(e.target.checked);
    }

    return (
        <div className="page-container">
          <Title level={3}>Counting Penguins with AI assistance</Title>
            <Text level={5}>You are being asked to join a study for a course project at Johns Hopkins University. Participation in this study is voluntary and you will not receive any compensation. Even if you decide to join now, you can change your mind later. If you want to stop your participation in the study, you can simply close the browser. The  study tasks can be completed within 8-10 minutes. The records and data from the study will only be reviewed by team members involved in the project. We will not ask for information that identifies you, thus, your responses cannot be associated with your identity. By clicking next you accept these conditions, and you agree to  join the study.
            </Text>
            <div className='checkboxMessage'>
                <Checkbox onChange={onChange}>
                    I give my consent for my data to be used for the study
                </Checkbox>
            </div>

            <div>
                <Button
                    type="primary"
                    size="medium"
                    style={{ margin: '0 10px' }}
                    onClick={() => start()}
                >
                    Start Study
                </Button>
            </div>
        </div>
    );
};

export default StarterPage;
