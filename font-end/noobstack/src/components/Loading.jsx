import React, { Component } from "react";

import { Spinner } from "react-bootstrap";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render = () => {
    return (
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
  };
}

export default Loading;
