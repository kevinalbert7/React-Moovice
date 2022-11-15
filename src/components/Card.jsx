import React, { Component } from "react";

export class Card extends Component {
  render() {
    const { image, releaseDate, title, overview, onClick } = this.props;

    return (
      <>
        <div
          style={{
            width: "300px",
            height: "25rem",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
            border: "1px solid rgba(0, 0, 0, 0.7)",
            borderRadius: "5px",
            padding: 0,
          }}
          onClick={onClick}
        >
          <div
            style={{
              width: "298px",
              height: "15rem",
              backgroundImage: `url(https://image.tmdb.org/t/p/w300/${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "5px 5px 0 0",
              borderBottom: "1px solid rgba(0, 0, 0, 0.7)",
            }}
          />

          {/* </div> */}
          {/* <img src={`https://image.tmdb.org/t/p/w300/${image}`} className="card-img-top" style={{height: "15rem"}}alt="..."/> */}
          <div className="card-body px-1">
            <h5 className="card-title text-center mt-1 mb-1">{title}</h5>
            <h6 className="card-subtitle text-center mb-2 text-muted">
              {releaseDate}
            </h6>
            <p className="card-text text-center text-truncate">{overview}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
