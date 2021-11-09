import React from "react";
import "./bootstrap.min.css";
import "./table.css";
import 'font-awesome/css/font-awesome.min.css'

const Card = (props) => {
  return (
    <div className="pricing col-lg-4">
      <div className="card mb-5 mb-lg-0">
      <h5 className="card-title text-muted text-uppercase text-center font-weight-bold">{props.data.tier}</h5>
      <h6 className="card-price text-center">{props.data.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        {
        props.data.features.map( ele => <li key={ele.name} className={`${ele.flag==="true" ? ' ' : 'text-muted'}`}><span className="fa-li"><i className={`${ele.flag==="true" ? 'fa fa-check' : 'fa fa-times'}`}></i></span>{ele.name}</li> )}
      </ul>
      <div className="d-grid">
        <a href="/#" className="btn btn-primary text-uppercase">Button</a>
      </div>
      </div>
    </div>
  )
};

export default Card;