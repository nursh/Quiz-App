import React, { Component } from 'react';
import { connect } from "react-redux";

import { fetchCategories } from "../redux/actions";
import filterCategories from '../utils/filterCategories';
import Category from './Category';

class Categories extends Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props.categories;
    let categoryData;
    if (categories.length > 0) {
      categoryData = filterCategories(categories);
      return (
        <div className="bg-red-400 mx-auto sm:w-full md:w-10/12 lg:w-9/12 ">
          {
            categoryData.map(category => <Category category={category} key={category.name}/>)
          }
        </div>
      );
    }

    return '';
  }
}

const mapStateToProps = ({ categories }) => ({ categories });
export default connect(
  mapStateToProps,
  { fetchCategories }
)(Categories)
