import './App.css';
import Button from './Button';
import Folder from './Folder';

function App(props){
  
  return (
    <div className="App">
        <Button/>
        <Folder/>
        <div id="folder"></div>
    </div>
  );
}
export default App;