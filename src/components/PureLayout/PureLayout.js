import TopBar from "../TopBar/TopBar";
import Sidenav from "../Sidenav/Sidenav";
import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import './PureLayout.css';

export default function PureLayout(props) {
    const {children} = props;
    // const [openSidebar, setOpenSidebar] = React.useState(false);
    return (
        <div className="fullPureWrapper">
            {children}
        </div>
    )
}

PureLayout.propTypes = {
    // title: PropTypes.string,
    children: PropTypes.node
};
