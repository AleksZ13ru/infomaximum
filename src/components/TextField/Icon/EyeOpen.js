import React from "react";
import PropTypes from "prop-types";

const SVG = ({
                 style = {},
                 width = "100%",
                 className = "",
                 viewBox = "0 0 12 12"
             }) => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="12" height="12" fill="white" fillOpacity="0.01"/>
        <path
            d="M0.999023 7C0.999023 4.74207 2.80389 2.5 5.48859 2.5C8.6123 2.5 9.97821 5.17307 9.97821 7H11.9751V6H10.8746C10.8413 5.83365 10.7999 5.66486 10.7501 5.49515L12.0001 5.01041L11.6399 4.07779L10.3911 4.56207C9.61475 2.95081 8.03876 1.5 5.48859 1.5C2.18585 1.5 -0.000976562 4.25793 -0.000976562 7H0.999023Z"
            fill="black"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M6.87463 4.42136C6.46442 4.14664 5.98206 4 5.48859 4C4.82697 4 4.19238 4.26337 3.72455 4.73221C3.25665 5.20105 2.99384 5.83694 2.99384 6.49997C2.99384 6.99445 3.1402 7.47781 3.41431 7.88892C3.68842 8.30005 4.07812 8.62051 4.534 8.80975C4.98987 8.99896 5.49133 9.0484 5.97528 8.95193C6.45923 8.8555 6.90381 8.61737 7.25269 8.26776C7.60162 7.91812 7.83923 7.4726 7.93549 6.98764C8.03174 6.50269 7.98236 6.00018 7.79358 5.54337C7.60474 5.08655 7.28491 4.69604 6.87463 4.42136ZM6.66309 7.67694C6.3515 7.9892 5.92932 8.16531 5.48859 8.16663C5.04749 8.16663 4.62439 7.99112 4.3125 7.67856C4.00055 7.366 3.82544 6.94202 3.82544 6.49997C3.82544 6.05795 4.00055 5.63397 4.3125 5.32141C4.62439 5.00885 5.04749 4.83331 5.48859 4.83331C5.55817 4.83475 5.62762 4.84033 5.69653 4.85001C5.47021 4.8869 5.25836 4.9856 5.08441 5.13525C4.9104 5.28488 4.78094 5.47961 4.71021 5.69818C4.63953 5.91675 4.63031 6.15076 4.68359 6.37424C4.73688 6.59772 4.85065 6.80212 5.01233 6.96506C5.17395 7.12802 5.37714 7.24323 5.59985 7.29791C5.82257 7.3526 6.05621 7.34473 6.27472 7.27512C6.49323 7.20554 6.68835 7.0769 6.83875 6.90341C6.98907 6.72995 7.08868 6.51822 7.12683 6.29166C7.13971 6.36047 7.14807 6.43005 7.15179 6.49997C7.15045 6.94159 6.97473 7.36465 6.66309 7.67694Z"
              fill="black"/>
    </svg>
);

export default SVG;
