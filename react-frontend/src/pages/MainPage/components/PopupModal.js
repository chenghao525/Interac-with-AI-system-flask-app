import { Modal, Button, Row, Col, Statistic, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from '../../../config/api';
import { request } from "../../../utils/request";

const PopupModal = (props) => {
  const { Countdown } = Statistic;
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 1000);
  const [firstEstimation, setFirstEstimation] = useState(0);
  const [updatedEstimation, setUpdatedEstimation] = useState(0);
  const [firstConfirm, setFirstConfim] = useState(false);
  const [nowTime, setNowTime] = useState(Date.now());
  const [userInputTime, setUserInputTime] = useState(Date.now());

  const handleCountdownFinished = () => {
    if (updatedEstimation === 0) {
      setUpdatedEstimation(firstEstimation);
      storeData(firstEstimation);
    }else{
      storeData(updatedEstimation);
    }
    clearModal();
    props.modalTimesUp();
  };

  const storeData = (passInUpdated) => {
    console.log("img name: ",props);
    let data = {
      user_id: localStorage.getItem("user-id"),
      q_id:props.imgName.split(".")[0],
      resp_time: userInputTime,
      init_guess: firstEstimation,
      final_guess: passInUpdated
    };
    request({ url: `${Api}answer/allow-cors`, method:"POST", data: data }).then(
      res => {
        console.log(res);
      }
    );
  };

  const clearModal = () => {
    setFirstEstimation(0);
    setUpdatedEstimation(0);
    setFirstConfim(false);
  };

  const handleConfirm = () => {
    setFirstConfim(true);
    setDeadline(Date.now() + 1000 * props.modalCountDown);
    setNowTime(Date.now());
  };

  const handleUpdateInput = (e) => {
    setUpdatedEstimation(e.target.value);
    setUserInputTime(((Date.now() - nowTime) / 1000).toFixed(2));
  };

  // useEffect(() => {
    
  // }, [firstConfirm]);

  return (
    <Modal
      title="AI suggestion dialog"
      centered
      visible={props.openModal}
      footer={null}
    >
      <div className="pop-container">
        <div>
          Please provide your best estimate of the number of penguins you saw in
          the image.
        </div>
        {!firstConfirm ? (
          <div>
            <Row gutter={16}>
              <Col span={12}>
                <div className="modal-col">
                  <div className="estimate-text">Your estimate:</div>
                  <Input
                    className="text-box"
                    placeholder="0"
                    onChange={(e) => {
                      setFirstEstimation(e.target.value);
                    }}
                  />
                </div>
              </Col>
              <Col span={12}>
                <div className="modal-col">
                  <Button
                    type="primary"
                    size="large"
                    style={{ marginTop: "42px" }}
                    onClick={handleConfirm}
                  >
                    Confirm
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <Row gutter={16}>
              <Col span={12}>
                <div className="modal-col">
                  <div className="estimate-text">Your estimate:</div>
                  <div className="text-box">{firstEstimation}</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="modal-col">
                  <div className="estimate-text">AI's suggestion:</div>
                  <div className="text-box">25</div>
                </div>
              </Col>
            </Row>

            <div className="lower-modal">
              <div>
                Would you like to update your answer based on the AI's
                suggestion?
              </div>
              <Row gutter={0}>
                <Col span={12}>
                  <div className="modal-col">
                    <div className="estimate-text">Update your estimate:</div>
                    <Input
                      className="text-box"
                      placeholder={firstEstimation}
                      onChange={handleUpdateInput}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div className="modal-col">
                    <div className="estimate-text">
                      <Countdown
                        title="Countdown"
                        value={deadline}
                        onFinish={handleCountdownFinished}
                        format="mm:ss"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PopupModal;
