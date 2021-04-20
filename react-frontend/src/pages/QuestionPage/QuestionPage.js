import React, { useEffect, useState } from "react";
import { Input } from "antd";

import { startReq } from "../../utils/request.js";

import "./css/questionPage.css";

const QuestionPage = () => {
  useEffect(()=>{

  },[])

  return (
    <div className="page-container">
      <div className="title">Questionnaire</div>
      <div style={{fontSize:"22px"}}>
        Here is your user id, you will need it for completing the form
        below(link):{" "}
      </div>
      <Input className="id-text-box" value={localStorage.getItem("user-id")}/>
      <div><a href="https://forms.gle/Ry6HT68adeZ8ihCv8" target="_blank">https://forms.gle/Ry6HT68adeZ8ihCv8</a></div>
    </div>
  );
};

export default QuestionPage;
