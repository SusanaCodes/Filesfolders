function App() {
  return (
    <div>
      <Folder name="Desktop" isOpen={true}>
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
  const { name, isOpen, children } = props;
  return (
    <div>
      {props.name}
      <div style={{ marginLeft: "23px" }}>
        {props.isOpen ? props.children : null}
      </div>
    </div>
  );
};

const File = (props) => {
  return <h4>{props.name}</h4>;
};

export default App;
