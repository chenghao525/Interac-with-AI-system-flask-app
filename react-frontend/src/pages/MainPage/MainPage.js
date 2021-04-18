import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Select, Statistic } from "antd";
import "./css/mainPage.css";
import { attributesValue } from "../../data/data.js";
import PopupModal from "./components/PopupModal";
import { Api } from '../../config/api';
import { request } from "../../utils/request";
const fs = require("fs");

const baseImgUrl = "./images/";

const MainPage = () => {
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

  const deadlineValue = Date.now() + 1000 * 2;
  const { Countdown } = Statistic;

  const handleCountdownFinished = () => {
    setDeleteImg(true);
    setOpenModal(true);
  };

  const modalTimesUp = () => {
    if(imgIndex >= imageList.length - 1){
      window.location.assign("/#/questionnaire");
    }

    setDeleteImg(false);
    setOpenModal(false);
    setImgName(imageList[imgIndex + 1]);
    setImgIndex(imgIndex + 1);
    
    // setDeadline(Date.now() + 1000 * 2);
  };

  const getUserData = () => {
    let url = `${Api}userInfo?userID=` + localStorage.getItem("user-id");
    request({ url: url, method:"GET"})
    .then(response => response.json())
    .then(
      res => {
        let imageString = res['q_order']
        formatImageList(imageString);
        setModalCountDown(res['timing']);
        if(imageString[0] === "E"){setFirstCountDown(Date.now() + 1000*5);}
        else {setFirstCountDown(Date.now() + 1000*10);}
      }
    );
  };

  const formatImageList = (imageString) =>{
    let strList = imageString.split(" ");
    let imgList = [];

    for(let str of strList){
      str += ".jpg";
      imgList.push(str);
    }
    setImageList(imgList);
  }

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(()=>{
    if(imgName[0] === "E")
      setFirstCountDown(Date.now() + 1000*5);
    else if(imgName[0] === "H")
    setFirstCountDown(Date.now() + 1000*10);
  },[imgName])

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
              value={firstCountDown}
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

export default MainPage;
