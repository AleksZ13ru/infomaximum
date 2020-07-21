import React from "react";

import EyeOpen from "./EyeOpen";
import EyeClose from "./EyeClose"
// import Phone from "./Phone";
// import Trash from "./Trash";
// import Message from "./Message";
// import Envelope from "./Envelope";

const Icon = props => {
    switch (props.name) {
        case "eyeOpen":
            return <EyeOpen {...props} />;
        case "eyeClose":
            return <EyeClose {...props} />;
        default:
            return;
    }
};

export default Icon;
