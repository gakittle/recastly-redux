import { connect } from 'react-redux';
import Search from '../components/Search.js';
import handleSearchChange from '../actions/search.js';

const mapDispatch = dispatch => {
  return {
    handleSearchInputChange: q => dispatch(handleSearchChange)
  };
};

const SearchContainer = connect(
  null,
  mapDispatch
)(Search);

export default SearchContainer;
