import './Folder.css';
import me from './ローランド.jpg';


function Folder() {
  return (
      <div className="closing_folder">
          <div className="box"></div>
          <div className="convex"></div>
          <div className="urabox"></div>
          <img src={me}></img>
      </div>
  );
}

export default Folder;