import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/firstPage.css";
import { Image, Dropdown, Menu, Button, Select } from "antd";
import img from "../images/1.jpg";
import { DownOutlined } from "@ant-design/icons";
import { attributesValue, imageList } from "../data/data.js";
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

  const getAttributeOptions = () => {
    console.log("Good shit");
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
    console.log("Good shit");
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
    setValueList(attributesValue[value]);
  };
  const handleValueSelect = (value) => {
    setSelectedValue(value);
  };

  const handleNextClicked = () => {
    //TODO: set all value to zero
    setImgIndex(imgIndex + 1);
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
              attribute:
              <Select
                defaultValue="lucy"
                style={{ width: 200 }}
                onChange={handleAttriSelect}
              >
                {getAttributeOptions()}
              </Select>
            </div>
            <div className="value-container">
              Value:
              <Select
                defaultValue="lucy"
                style={{ width: 200 }}
                onChange={handleValueSelect}
              >
                {getValueOptions()}
              </Select>
            </div>
          </div>
          <div className="btn-container">
            <Button className="round-btn" type="primary">
              Add
            </Button>
            <Button className="round-btn" type="primary" danger>
              Delete
            </Button>
            <Button className="round-btn">Restart</Button>
          </div>
        </div>
        <div className="column right-panel">
          <img
            width={500}
            height={300}
            src={baseImgUrl + imageList[imgIndex]}
          ></img>
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
