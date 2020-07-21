import TopBar from "../TopBar/TopBar";
import Sidenav from "../Sidenav/Sidenav";
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import "./MainLayout.css";

export default function MainLayout(props) {
    const {children} = props;
    const [openSidebar, setOpenSidebar] = React.useState(false);
    return (
        <Fragment>
            <TopBar onClick={() => setOpenSidebar(true)}/>
            <Sidenav open={openSidebar} onClose={() => setOpenSidebar(false)}/>
            <div className={"mainLayout"}>
                {children}
            </div>
        </Fragment>

    )
}

MainLayout.propTypes = {
    // title: PropTypes.string,
    children: PropTypes.node
};
