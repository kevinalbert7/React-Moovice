import React, { Component } from "react";

export class Error404 extends Component {
  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{height: "95vh"}}>
        <div className="text-center">
          <h1 className="m-5">Error404</h1>
          <p className="fs-4">Page not found</p>
        </div>
      </div>
    )
  }
}

export default Error404;
