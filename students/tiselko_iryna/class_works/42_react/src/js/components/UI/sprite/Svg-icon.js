import React from "react";

export default function SvgIcon({ iconId, className }) {
    return (
        <svg className={className}>
            <use xlinkHref={"#" + iconId} />
        </svg>
    )
}
