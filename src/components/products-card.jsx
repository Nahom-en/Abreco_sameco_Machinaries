import React from "react";

function Products(props) {
  return (
    <div class="pro-item-cards">
      <div className="card " style={{ width: '18rem' }}>
        <img src={props.img} className="card-img-top" alt={props.alt} />
        <div className="card-body">
          <p className="card-text">{props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
