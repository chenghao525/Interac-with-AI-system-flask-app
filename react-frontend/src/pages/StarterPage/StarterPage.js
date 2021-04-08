import { startReq } from '../../utils/request.js';
import { Button } from "antd";

const StarterPage = () => {

  const start = () => {
    console.log("start study")
    startReq({ userApproval: "True"}).then(window.location.assign("/#/mainpage"))
  };

  return (
    <div className="page-container">
      <div className="title">Counting Penguins with AI assistance</div>
      <div>
        <Button
            type="primary"
            onClick={() => start()}
        >
          Start Study
        </Button>
      </div>
    </div>
  );
};

export default StarterPage;
