import React, { Component, ReactNode, ErrorInfo } from "react";
import { Redirect, Link } from "react-router-dom";

interface IProps {
  children: ReactNode;
}

interface IState {
  redirect: boolean;
  hasError: boolean;
}
export class ErrorBoundary extends Component<IProps, IState> {
  state = {
    redirect: false,
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  // set the types for error  and info
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>
          to back to the home page or wait five seconds
        </h1>
      );
    }

    return this.props.children;
  }
}
