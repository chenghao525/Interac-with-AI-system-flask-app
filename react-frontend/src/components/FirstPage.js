import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/firstPage.css";
import { Image, Dropdown, Menu, Button, Select } from "antd";
import img from "../images/1.jpg";
import { DownOutlined } from "@ant-design/icons";

const { Option } = Select;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        3rd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        4th menu item
      </a>
    </Menu.Item>
  </Menu>
);

const FirstPage = () => {
  //   const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);
  const [dropdownValue, setDropdownValue] = useState(["value1", "value2"]);

  const dropdownValues = () => {
    console.log("Good shit");
    return (
      <>
        {dropdownValue.map((value) => (
          <Option>{value}</Option>
        ))}
      </>
    );
  };

  const handleAttriSelect = () => {};

  useEffect(() => {
    console.log("Example use effect");
  }, []);

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
                {dropdownValues()}
              </Select>
            </div>
            <div className="value-container">
              Value:
              <Dropdown overlay={menu}>
                <Button className="value-dropdown">
                  Click to see values <DownOutlined />
                </Button>
              </Dropdown>
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
          <Image width={500} height={300} src={img} preview={false}></Image>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
