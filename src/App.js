import Drawer from "./components/drawer";

function App() {
  return (
    <div className="App">
      <Drawer placement="bottom">content bottom</Drawer>
      <Drawer placement="top">content top</Drawer>
      <Drawer placement="left">content left</Drawer>
      <Drawer placement="right">content right</Drawer>
    </div>
  );
}

export default App;
