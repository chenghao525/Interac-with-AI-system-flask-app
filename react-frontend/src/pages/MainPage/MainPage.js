import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Select, Statistic } from "antd";
import "./css/mainPage.css";
import { attributesValue, imageList } from "../../data/data.js";
import PopupModal from "./components/PopupModal";
import { Api } from '../../config/api';
import { request } from "../../utils/request";
const fs = require("fs");

const baseImgUrl = "./images/";

const MainPage = () => {
  //   const dispatch = useDispatch();
  const [valueList, setValueList] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgName, setImgName] = useState(imageList[0]);
  const [openModal, setOpenModal] = useState(false);
  const [deadline, setDeadline] = useState(0);
  const [deleteImg, setDeleteImg] = useState(false);

  const deadlineValue = Date.now() + 1000 * 2;

  const { Countdown } = Statistic;

  const handleCountdownFinished = () => {
    setDeleteImg(true);
    setOpenModal(true);
    console.log("Finished!");
  };

  const modalTimesUp = () => {
    if(imgIndex >= imageList.length - 1){
      window.location.assign("/#/questionnaire");
    }

    setDeleteImg(false);
    setOpenModal(false);
    setImgName(imageList[imgIndex + 1]);
    setImgIndex(imgIndex + 1);
    setDeadline(Date.now() + 1000 * 2);
  };

  // const getData = () => {
  //   request({ url: `${Api}getData/`, method:"GET"}).then(
  //     res => {
  //       console.log(res.data);
  //     }
  //   );
  // };

  useEffect(() => {
    setDeadline(deadlineValue);
  }, []);

  return (
    <div className="page-container">
      <div className="title">Counting penguins with AI assistance</div>
      <div className="row">
        <div className="column left-panel">
          <div className="img-frame-container">
            <div className="img-frame">
              {deleteImg ? (
                <img src={baseImgUrl + "blank.jpg"}></img>
              ) : (
                <img src={baseImgUrl + imageList[imgIndex]}></img>
              )}
            </div>
          </div>
        </div>
        <div className="column right-panel">
          <div className="countdown-container">
            <Countdown
              title="Countdown"
              value={deadline}
              onFinish={handleCountdownFinished}
              format="mm:ss"
            />
          </div>
        </div>
      </div>
      <PopupModal
        openModal={openModal}
        modalTimesUp={modalTimesUp}
      ></PopupModal>
    </div>
  );
};

export default MainPage;
