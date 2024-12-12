import { Helmet } from "react-helmet"
import PropTypes from 'prop-types';
import React from 'react'
import { title } from "motion/react-client";

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>  

);};

PageTitle.propTypes = {
    title:PropTypes.string,
};

export default PageTitle;