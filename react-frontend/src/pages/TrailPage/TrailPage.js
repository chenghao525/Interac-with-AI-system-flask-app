import React, { useEffect, useState } from "react";
import { Statistic } from "antd";
import "./css/trailPage.css";
import PopupModal from "./components/PopupModal";
import { request } from "../../utils/request";
const fs = require("fs");

const baseImgUrl = "/static/img/";

const TrailPage = () => {
  //   const dispatch = useDispatch();
  const [valueList, setValueList] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [imgName, setImgName] = useState("");
  const [imageList, setImageList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deadline, setDeadline] = useState(0);
  const [deleteImg, setDeleteImg] = useState(false);
  const [firstCountDown, setFirstCountDown] = useState(Date.now() + 1000 * 1000);
  const [modalCountDown, setModalCountDown] = useState(Date.now() + 1000 * 1000);

  const deadlineValue = Date.now() + 1000 * 10;
  const { Countdown } = Statistic;

  const handleCountdownFinished = () => {
    setDeleteImg(true);
    setOpenModal(true);
  };

  const modalTimesUp = () => {
    window.location.assign("/#/readyPage");
  
    setDeleteImg(false);
    setOpenModal(false);
    // setImgName(imageList[imgIndex + 1]);
    // setImgIndex(imgIndex + 1);
    
    // setDeadline(Date.now() + 1000 * 2);
  };


  useEffect(() => {
    
  }, []);


  return (
    <div className="page-container">
      <div className="title">Counting penguins with AI assistance (Tryout)</div>
      <div className="row">
        <div className="column left-panel">
          <div className="img-frame-container">
            <div className="img-frame">
              {deleteImg ? (
                <img src={baseImgUrl + "blank.jpeg"}></img>
              ) : (
                <img src={baseImgUrl + "trail.jpeg"}></img>
              )}
            </div>
          </div>
        </div>
        <div className="column right-panel">
          <div className="countdown-container">
            <Countdown
              title="Countdown"
              value={deadlineValue}
              onFinish={handleCountdownFinished}
              format="mm:ss"
            />
          </div>
        </div>
      </div>
      <PopupModal
        openModal={openModal}
        modalTimesUp={modalTimesUp}
        modalCountDown={modalCountDown}
        imgName={imgName}
      ></PopupModal>
    </div>
  );
};

export default TrailPage;
