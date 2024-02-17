import Button from "./Button";
import { GiClick } from "react-icons/gi";
import { GiBuyCard } from "react-icons/gi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaSave } from "react-icons/fa";
import { CgDanger } from "react-icons/cg";
import { IoIosCloudDone } from "react-icons/io";

function App() {
  const handleClick = () => console.log("Click");
  return (
    <div>
      <div>
        <Button
          primary
          rounded
          outline
          className="mb-5 mt-5"
          onClick={handleClick}
        >
          <GiClick />
          Click here!!
        </Button>
      </div>
      <div>
        <Button secondary outline rounded>
          <GiBuyCard />
          Buy me!
        </Button>
      </div>
      <div>
        <Button success outline>
          <RiDeleteBin6Line />
          Delete
        </Button>
      </div>
      <div>
        <Button warning>
          <FaSave />
          Save
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          <CgDanger />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button rounded>
          <IoIosCloudDone />
          Submit!
        </Button>
      </div>
    </div>
  );
}

export default App;
