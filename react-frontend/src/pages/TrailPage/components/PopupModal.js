import { Modal, Button, Row, Col, Statistic, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Api } from "../../../config/api";
import { request } from "../../../utils/request";

const PopupModal = (props) => {
  const { Countdown } = Statistic;
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 1000);
  const [firstEstimation, setFirstEstimation] = useState(0);
  const [updatedEstimation, setUpdatedEstimation] = useState(0);
  const [firstConfirm, setFirstConfim] = useState(false);
  const [nowTime, setNowTime] = useState(Date.now());
  const [userInputTime, setUserInputTime] = useState(Date.now());
  const [questionId, setQuestionId] = useState("");
  const [AISuggestion, setAISuggestion] = useState(0);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [inputDiabled, setInputDiabled] = useState(false);

  const handleCountdownFinished = () => {
    if (updatedEstimation === 0) {
      setUpdatedEstimation(firstEstimation);
      storeData(firstEstimation);
    } else {
      storeData(updatedEstimation);
    }
    setShowNextBtn(true);
    setInputDiabled(true);
  };

  const storeData = (passInUpdated) => {

  };

  const clearModal = () => {
    setFirstEstimation(0);
    setUpdatedEstimation(0);
    setFirstConfim(false);
    setInputDiabled(false);
    setShowNextBtn(false);
  };

  const handleConfirm = () => {
    setFirstConfim(true);
    setDeadline(Date.now() + 1000 * 10);
    setNowTime(Date.now());
  };

  const handleUpdateInput = (e) => {
    setUpdatedEstimation(e.target.value);
    setUserInputTime(((Date.now() - nowTime) / 1000).toFixed(2));
  };

  const handleNext = () =>{
    props.modalTimesUp();
    clearModal();
  };

  useEffect(() => {
    console.log("Once")
    if(props.imgName === undefined ) return;
    let qId = props.imgName.split(".")[0];
    setQuestionId(qId);
    // getAISuggestion(qId); 
  }, [props.imgName]);

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
            <Row gutter={16} style={{marginBottom:"40px"}}>
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
            <Row gutter={16} style={{marginBottom:"40px"}}>
              <Col span={12}>
                <div className="modal-col">
                  <div className="estimate-text">Your estimate:</div>
                  <div className="text-box">{firstEstimation}</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="modal-col">
                  <div className="estimate-text">AI's suggestion:</div>
                  <div className="text-box">21</div>
                </div>
              </Col>
            </Row>

            <div className="lower-modal">
              <div>
                Would you like to update your answer based on the AI's
                suggestion?
              </div>
              <Row gutter={0} style={{marginBottom:"40px"}}>
                <Col span={12}>
                  <div className="modal-col">
                    <div className="estimate-text">Update your estimate:</div>
                    <Input
                      className="text-box"
                      placeholder={firstEstimation}
                      onChange={handleUpdateInput}
                      disabled={inputDiabled}
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
              {showNextBtn ? (
                  <div style={{textAlign:"center"}}>
                  <Button
                    type="primary"
                    size="large"
                    onClick={handleNext}
                  >
                    Finish Tryout
                  </Button>
                  </div>
                ) : (
                  <div></div>
                )}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PopupModal;
