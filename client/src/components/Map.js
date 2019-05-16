import React from "react";
import "../styles/Map.css";

function Map() {
  return (
    <div>
    <div className="container">
      <div className="card text-center">
        <div className="card-header">
        </div>
        <div className="card-body">
        <iframe src="https://www.google.com/maps/d/embed?mid=1H4WtvSCprryW4rtBV6e1J7nO0JGtwlOP" title="myFrame" width="940" height="780"></iframe>

        </div>
      </div>
    </div>
    <div class="card-footer text-muted">
  </div>
    </div>
  );
}

export default Map;
