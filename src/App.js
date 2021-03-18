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
  const direction = isOpen ? "down" : "right";

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <span onClick={handleClick}>
        <i className=" green largefolder icon"></i>
        <i className={` green caret ${direction} icon`}></i>
      </span>
      {name}
      <div style={{ marginLeft: "23px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
    mp4: "  headphones",
    jpeg: " file image",
    png: " file outline",
  };

  return (
    <div>
      <i className={` blue caret ${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
