import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchCategories } from "../redux/actions";
import filterCategories from '../utils/filterCategories';

class Categories extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props.categories;
    let categoryData;
    if (categories.length > 0) {
      categoryData = filterCategories(categories);
    }
    
    return (
      <div>
        Categories
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });
export default connect(
  mapStateToProps,
  { fetchCategories }
)(Categories)
