import React from 'react';
import { withRouter } from "react-router";

export const requireAuthenticationHOC = ChildComponent => {

  class ComposedComponent extends React.Component {

    componentDidMount() {
      this.shouldNavigateToStart();
    }

    componentDidUpdate() {
      this.shouldNavigateToStart();
    }

    shouldNavigateToStart() {
      if (!sessionStorage.getItem('token') ) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ChildComponent {...this.props} />
      );
    }
  }

  // withRouter is needed because the ChildComponent is not always rendered by the Route, thus not having props.history
  return withRouter(ComposedComponent);
};
