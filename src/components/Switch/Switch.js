import React from "react";
import "./Switch.css";

const Switch = ({checked, chengeCheckbox, label}) => { 

    return (
        <div className="container">
            <p className="title">{label}</p>
        <div className="toggle-switch">
            <input type="checkbox" className="checkbox" checked={checked} onChange={chengeCheckbox}
                name={label} id={label} />
            <label className="label" htmlFor={label}>
            <span className="inner" />
            <span className="switch" />
            </label>
        </div>
    </div>
    )};

export default Switch;