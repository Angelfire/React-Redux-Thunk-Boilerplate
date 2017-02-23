import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData('http://58af0d6b73918a1200362d99.mockapi.io/items');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! there was an error loading the items</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.label}
          </li>
        ))}
      </ul>
    );
  }
}

ItemList.PropTypes = {
  fetchData: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  items: state.items,
  hasErrored: state.itemsHasErrored,
  isLoading: state.itemsIsLoading
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (url) => dispatch(itemsFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
