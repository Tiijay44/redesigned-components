import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary secondary rounded outline>
          Click here!!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Buy me!
        </Button>
      </div>
      <div>
        <Button success outline>
          Delete
        </Button>
      </div>
      <div>
        <Button warning>Save</Button>
      </div>
      <div>
        <Button danger outline rounded>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button>Submit!</Button>
      </div>
    </div>
  );
}

export default App;
