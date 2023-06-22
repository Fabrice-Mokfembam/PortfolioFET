import React from "react";
import "./Projects.css";
import { useState, useEffect } from 'react';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
  fetch('http://localhost:3001/allCompassDATA')
    .then(response => response.json())
    .then(result => {
      console.log(result); // add this line
      setData(result);
    })
    .catch(error => console.log(error));
}, []);

  return (
    <div className="container projects">
      {data.map((item, index) => (
        <div key={index} className="proBlock">
          <div className="imageContainerProjects"><img src={item.ImageURL} alt={item.ProjectTitle}  /></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3>{item.ProjectTitle}</h3>
            <p>Status: {item.status}</p>
                  <p>Description: {item.Description}</p>          
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;