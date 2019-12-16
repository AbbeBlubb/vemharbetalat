import React from 'react';

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

  return ComposedComponent;
};
