import React, { useState } from 'react';

import { Button} from "antd";
import "./css/readyPage.css";

const ReadyPage = () => {

    const handleBtn = () =>{
        window.location.assign("/#/mainPage")
    }

    return (
        <div className="ready-page-container">
          <div className="title">Now you have mastered our application, click the button below to start the real test.</div>
          <div className="title">There are <b>10</b> images in total.</div>
          <Button
                    type="primary"
                    size="large"
                    onClick={handleBtn}
                  >
                    Start Test
                  </Button>
        </div>
    );
};

export default ReadyPage;
