// import { color } from "motion/react";
import PropTypes from "prop-types";
import "../index.css";
import React from 'react'

const Button = ({
    classes='',
    variant ='filled',
    color='primary',
    children,
    ...rest
}) => {
  return (
    <button className= {`btn ${variant} ${color} ${classes}`}{...rest}>
        {children}
        <div className="state-layer"></div>
    </button>
  )
}
Button.propTypes = {
    classes: PropTypes.string,
    variant:PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any,
};
export {Button};