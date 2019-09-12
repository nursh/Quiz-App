import React, { Component } from "react";
import { connect } from "react-redux";


import Categories from './components/Categories';
import { fetchToken } from "./redux/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchToken();
  }

  render() {
    return (
      <div>
        <Categories />
      </div>
    );
  }
}

const mapStateToProps = ({ token }) => ({ token });
export default connect(
  mapStateToProps,
  { fetchToken }
)(App);
