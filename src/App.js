import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="RB.mp4" />
          <File name="express_file.mp4" />
        </Folder>
        <File name="dogs.jpeg" />
        <File name="cats.png" />
      </Folder>

      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { name, children } = props;

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={handleClick}>{name}</span>
      <div style={{ marginLeft: "23px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  return <h4>{props.name}</h4>;
};

export default App;
