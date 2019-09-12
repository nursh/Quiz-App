import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchToken } from '../redux/actions';
import Categories from './Categories';

class Home extends Component {

  componentDidMount() {
    this.props.fetchToken();
  }

  render() {
    return (
      <div>
        <Categories />
      </div>
    )
  }
}

const mapStateToProps = ({ token }) => ({ token });
export default connect(
  mapStateToProps,
  { fetchToken }
)(Home);
