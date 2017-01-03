import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Card from '../components/Card';
import Heading from '../components/Heading';
import { load as loadCats, trigger } from '../redux/modules/cats';

class Cats extends Component {
  static propTypes = {
    cats: PropTypes.shape.isRequired,
    loadCats: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { cats } = this.props;

    if (!cats.isLoaded) {
      this.props.loadCats();
    }
  }

  render() {
    const { cats } = this.props;
    const CatsWrapper = styled.div`
      display: flex;
      flex-wrap: wrap;
    `;
    return (
      <CatsWrapper>
        {cats.length ? cats.map(cat => (
          <Card>
            <img role="presentation" src={cat.data.thumbnail} />
          </Card>
        )) :
        <Heading>Loading you some cats</Heading>}
      </CatsWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    cats: state.cats.list,
  };
}

export default connect(mapStateToProps, { loadCats, trigger })(Cats);
