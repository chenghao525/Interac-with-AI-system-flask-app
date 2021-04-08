import { Modal, Button, Row, Col, Statistic } from "antd";

const PopupModal = (props) => {
  const { Countdown } = Statistic;
  const deadline = Date.now() + 1000 * 2;

  const handleCountdownFinished = () =>{
    // setOpenModal(true);
    console.log("Finished!");
  }

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

        <Row gutter={16}>
          <Col span={12}>
            <div className="modal-col">
              <div className="estimate-text">Your estimate:</div>
              <div className="text-box">20</div>
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
            Would you like to update your answer based on the AI's suggestion?
          </div>
          <Row gutter={0}>
            <Col span={12}>
              <div className="modal-col">
                <div className="estimate-text">Update your estimate:</div>
                <div className="text-box"></div>
              </div>
            </Col>
            <Col span={12}>
            <div className="modal-col">
            <div className="estimate-text">
            <Countdown title="Countdown" value={deadline} onFinish={handleCountdownFinished} format="mm:ss"/>
            </div>
          </div>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
};

export default PopupModal;
