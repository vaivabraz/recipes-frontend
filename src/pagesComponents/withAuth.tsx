import React from "react";
import { getAccessToken } from "../fakeStore";
import Router from "next/router";

export const withAuth = <T extends object>(C: React.ComponentClass<T>) => {
  class AuthComponent extends React.Component<T> {
    state = {
      isLoading: true,
    };
    async componentDidMount() {
      const isLoggedIn: string = getAccessToken();
      if (!isLoggedIn) {
        return Router.push("/login");
      }
      this.setState({ isLoading: false });
    }

    render() {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }
      return <C {...this.props} />;
    }
  }

  return AuthComponent;
};

export default withAuth;
