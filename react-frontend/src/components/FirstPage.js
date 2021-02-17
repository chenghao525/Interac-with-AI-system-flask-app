import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Table, Button, Popconfirm, message } from "antd";
// import { httpPost } from "../config/request";
// import { API } from "../config/api";
// import AddPersonformModal from "./AddPersonFormModal";
// require("../customCSS/myStyle.css");

const FirstPage = () => {
//   const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("Example use effect");
  }, []);

  return <div>This is the first page</div>;
};

export default FirstPage;
