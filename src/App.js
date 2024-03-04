import './App.css';
import Logo from './component/Logo/logo';
import Title from './component/Sgin/title'
function App() {
  return (
    <div className="App" style={{'background-color':' #282c34','min-height': '100vh'}}>
      <Logo/>
      <Title/>
    </div>
  );
}

export default App;
