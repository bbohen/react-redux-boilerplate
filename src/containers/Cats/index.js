import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, Heading } from '../../components';
import Wrapper from './Wrapper';
import { load as loadCats } from '../../redux/modules/cats';

class Cats extends Component {
  static propTypes = {
    catsAreLoaded: PropTypes.bool.isRequired,
    loadCats: PropTypes.func.isRequired,
    cats: PropTypes.arrayOf(PropTypes.shape),
  }

  static defaultProps = {
    cats: [],
  }

  componentWillMount() {
    const { catsAreLoaded } = this.props;

    if (!catsAreLoaded) {
      this.props.loadCats();
    }
  }

  render() {
    const { cats } = this.props;

    return (
      <Wrapper>
        {cats.length ? cats.map(({ data }, index) => (
          <Card
            index={index}
            key={data.id}
            imageUrl={data.thumbnail}
          />
        )) :
        <Heading>Loading you some cats</Heading>}
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    cats: state.cats.list,
    catsAreLoaded: state.cats.isLoaded,
  };
}

export default connect(mapStateToProps, { loadCats })(Cats);
