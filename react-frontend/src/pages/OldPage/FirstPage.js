import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/firstPage.css";
import { Button, Select } from "antd";
import { attributesValue, imageList } from "../../data/data.js";
import Attribute from "./Attribute.js";
const fs = require("fs");

const { Option } = Select;
const baseImgUrl = "./images/";

const FirstPage = () => {
  //   const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [valueList, setValueList] = useState([]);
  const [selectedAttribute, setSelectedAttribute] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [imgIndex, setImgIndex] = useState(0);
  const [desContentHTML, setDesContentHTML] = useState(0);
  const [attriValDict, setAttriValDict] = useState({});
  const [lastAddedAttr, setLastAddedAttr] = useState("");


  const getAttributeOptions = () => {
    return (
      <>
        {Object.keys(attributesValue).map((value, idx) => (
          <Option value={value} key={idx}>
            {value}
          </Option>
        ))}
      </>
    );
  };

  const getValueOptions = () => {
    return (
      <>
        {valueList.map((value, idx) => (
          <Option value={value} key={idx}>
            {value}
          </Option>
        ))}
      </>
    );
  };

  const handleAttriSelect = (value) => {
    setSelectedAttribute(value);
    setSelectedValue("");
    setValueList(attributesValue[value]);
  };
  const handleValueSelect = (value) => {
    setSelectedValue(value);
  };

  const handleNextClicked = () => {
    //TODO: set all value to zero
    setImgIndex(imgIndex + 1);
  };

  const handleAddBtn = () => {
    console.log("Handle add button");
    if (selectedAttribute && selectedValue) {
      setLastAddedAttr(selectedAttribute)
      setAttriValDict((prevState) => ({
        ...prevState,
        [selectedAttribute]: selectedValue,
      }));
    }
  };

  const handleDeleteBtn = () =>{
    const { [lastAddedAttr]: tmp, ...rest } = attriValDict;
    setAttriValDict(rest);
  }

  const renderDescriptionPair = () => {
    return (
      <>
        {Object.keys(attriValDict).map((key) => (
          <Attribute name={key} value={attriValDict[key]} key={key[0]}/>
        ))}
      </>
    );
  };

  useEffect(() => {}, []);

  return (
    <div className="page-container">
      <div className="title">Bird classification with AI assistance</div>
      <div className="row">
        <div className="column left-panel">
          <div style={{ textAlign: "left" }}>
            Select one attribute that describes the bird you see on the right
            from the list below
          </div>
          <div className="input-container">
            <div className="attribute-container">
              <span className="input-description">Attribute:</span>
              <Select
                defaultValue=""
                style={{ width: 200 }}
                onChange={handleAttriSelect}
              >
                {getAttributeOptions()}
              </Select>
            </div>
            <div className="value-container">
              <span className="input-description">Value:</span>
              <Select
                defaultValue=""
                style={{ width: 200 }}
                onChange={handleValueSelect}
                value={selectedValue}
              >
                {getValueOptions()}
              </Select>
            </div>
          </div>
          <div className="btn-container">
            <Button className="round-btn" type="primary" onClick={handleAddBtn}>
              Add
            </Button>
            <Button className="round-btn" type="primary" onClick={handleDeleteBtn} danger>
              Delete
            </Button>
            <Button className="round-btn">Restart</Button>
          </div>
          <div className="description-box">
            <div id="first-line">Your current description is:</div>
            <div className="description-context">{renderDescriptionPair()}</div>
          </div>
        </div>
        <div className="column right-panel">
          <div className="img-frame-container">
            <div className="img-frame">
              <img src={baseImgUrl + imageList[imgIndex]}></img>
            </div>
          </div>
          <div>
            <Button
              className="round-btn next-btn"
              type="primary"
              onClick={handleNextClicked}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
