import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Select, Statistic } from "antd";
import "./css/mainPage.css";
import { attributesValue, imageList } from "../../data/data.js";
import PopupModal from "./components/PopupModal";
const fs = require("fs");

const baseImgUrl = "./images/";

const MainPage = () => {
  //   const dispatch = useDispatch();
  const [valueList, setValueList] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [deadline, setDeadline] = useState(0);
  const [deleteImg, setDeleteImg] = useState(false);

  const deadlineValue = Date.now() + 1000 * 2;

  const { Countdown } = Statistic;

  const handleNextClicked = () => {
    //TODO: set all value to zero
    setImgIndex(imgIndex + 1);
  };

  const handleCountdownFinished = () => {
    setDeleteImg(true);
    setOpenModal(true);
    console.log("Finished!");
  };

  const modalTimesUp = () => {
    setDeleteImg(false);
    setOpenModal(false);
    setImgIndex(imgIndex + 1);
    setDeadline(Date.now() + 1000 * 2);
  };

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

          {/* <div>
            <Button
              className="round-btn next-btn"
              type="primary"
              onClick={handleNextClicked}
            >
              Next
            </Button>
          </div> */}
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
