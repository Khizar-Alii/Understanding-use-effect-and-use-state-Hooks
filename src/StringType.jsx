import React, { useEffect, useState } from "react";
import "./StringType.css"; // Import the CSS file for styling

function StringType() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  //   useEffect(()=>{
  //     console.log('Executes Every Singel Time our Application Renders');
  //   })

  //   useEffect(() => {
  //     console.log("Whenever Dependency value change your hook is going to run");
  //   },[resourceType]);

  //   useEffect(() => {
  //     console.log("onMount");
  //   }, []);

    useEffect(() => {
      console.log("Whenever Dependency value change your hook is going to run");
      return(()=>{
        console.log('Return from resource change : cleanup') //it will run the return code then the actual setup
      })
    },[resourceType]);




  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div className="container">
      <div className="resourceType">
        <div className="btns">
          <button
            className={resourceType === "posts" ? "active" : ""}
            onClick={() => setResourceType("posts")}
          >
            Posts
          </button>
          <button
            className={resourceType === "comments" ? "active" : ""}
            onClick={() => setResourceType("comments")}
          >
            Comments
          </button>
          <button
            className={resourceType === "users" ? "active" : ""}
            onClick={() => setResourceType("users")}
          >
            Users
          </button>
        </div>

        <div className="heading">
          <h1 className="center">{resourceType}</h1>
        </div>
      </div>
      <div className="data">
        {items.map((item) => (
          <pre key={Math.random() * 1000}>{JSON.stringify(item)}</pre>
        ))}
      </div>
    </div>
  );
}

export default StringType;
