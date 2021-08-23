import React, { Fragment } from "react";

const Card = ({item}) => {

    const {brandName,carColor,id,image:photo,productName} = item;
  return (
    <Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={photo} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">
            Tawshif is a web designer living in Bangladesh.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {`${brandName} - ${carColor} - ${id}`}
            <span>
              <button className="btn btn-info" style={{ float: "right" }}>
                Follow
              </button>
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Card;
