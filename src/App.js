import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchToken } from './redux/actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchToken();
  }

  render() {
    return (
      <div>
        <h1>Enter your name</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ token }) => ({ token })
export default connect(
  mapStateToProps,
  { fetchToken }
)(App);
