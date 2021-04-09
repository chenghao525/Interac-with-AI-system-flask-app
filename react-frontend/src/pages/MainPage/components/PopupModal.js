import { Modal, Button, Row, Col, Statistic, Input } from "antd";
import React, { useEffect, useState } from "react";

const PopupModal = (props) => {
  const { Countdown } = Statistic;
  const [deadline, setDeadline] = useState(Date.now() + 1000 * 1000);
  const [firstEstimation, setFirstEstimation] = useState(0);
  const [updatedEstimation, setUpdatedEstimation] = useState(0);
  const [firstConfirm, setFirstConfim] = useState(false);

  const handleCountdownFinished = () => {
    // setOpenModal(true);
    if(updatedEstimation === 0) setUpdatedEstimation(firstEstimation);
    console.log("Finished!", updatedEstimation);
    clearModal();
    props.modalTimesUp();
  };

  const clearModal = () =>{
    setFirstEstimation(0);
    setUpdatedEstimation(0);
    setFirstConfim(false);
  }

  const handleConfirm = () =>{
    setFirstConfim(true);
    console.log(firstEstimation);
  }

  useEffect(() => {
    setDeadline(Date.now() + 1000 * 2);
  }, [firstConfirm]);

  return (
    <Modal
      title="AI suggestion dialog"
      centered
      visible={props.openModal}
      footer={null}
      //   onOk={() => this.setModal2Visible(false)}
      //   onCancel={() => this.setModal2Visible(false)}
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
                  <Input className="text-box" placeholder="0" onChange={(e)=>{setFirstEstimation(e.target.value)}}/>
                </div>
              </Col>
              <Col span={12}>
                <div className="modal-col">
                  <Button type="primary" size="large" style={{marginTop:"42px"}} onClick={handleConfirm}>Confirm</Button>
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
                    <Input className="text-box" value={firstEstimation} onChange={(e)=>{setUpdatedEstimation(e.target.value)}}/>
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
