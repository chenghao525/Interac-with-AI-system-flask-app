import React, { useState } from 'react';

import { startReq } from '../../utils/request.js';
import { Button, Checkbox, message} from "antd";

import "./css/starterPage.css";

const StarterPage = () => {

    const [consent, setConsent] = useState(false);

    const start = () => {
        if(consent === true){
            console.log("Start Study")
            startReq({ userApproval: 1}).then(window.location.assign("/#/mainpage"))
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
          <div className="title">Counting Penguins with AI assistance</div>

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
