import React from 'react';

const Pane = (props) =>
    <div className="tab-pane active">
        {props.children}
    </div>;

export default Pane;
