
import "./maintainanceUpdate.css";

export default function MaintainanceUpdate() {
  return (
    <div className="MaintainanceUpdate"> 
      <div className="updateContainer">
        <h1 className="MainTitle">Edit Request</h1>
        <button className="CreateNewRequest">Create</button>
      </div>

      <div className="showUpdate">
      
      <div className="show">ShowContentTop
        <span className="number">ID</span>
        <span className="Date">Date</span>
        <span className="Reason">Reason</span>
      </div>

      <div className="show">ShowContentBottom
        <span className="Status">Status</span>
        <span className="Location">Location</span>
        <span className="Action ">Action</span>
      </div>

      <div className="update">UpdateContent</div>
      </div>
    </div>
  );
}
