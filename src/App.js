import './App.css';
import Button from './Button';
import ParentFolder from './ParentFolder';

function App(props){
  
  return (
    <div className="App">
        <Button/>
        <ParentFolder/>
        <div id="folder"></div>
    </div>
  );
}
export default App;