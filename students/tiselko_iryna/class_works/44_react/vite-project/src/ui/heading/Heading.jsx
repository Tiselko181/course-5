import React from "react";
import PropTypes from "prop-types";

Headings.propTypes = {
    type: PropTypes.string.isRequired,
    props: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
};

export default function Headings({ type, props, children }) {
    return (
        React.createElement(type, { ...props }, children)
    );
}
