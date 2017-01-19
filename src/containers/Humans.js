import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Card, Heading } from '../components';
import { load as loadHumans } from '../redux/modules/humans';

const CatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class Humans extends Component {
  static propTypes = {
    humans: PropTypes.arrayOf(PropTypes.shape),
    humansAreLoaded: PropTypes.bool.isRequired,
    loadHumans: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { humansAreLoaded } = this.props;

    if (!humansAreLoaded) {
      this.props.loadHumans();
    }
  }

  render() {
    const { humans } = this.props;

    return (
      <CatsWrapper>
        {humans.length ? humans.map(({ email, photo }) => (
          <Card key={email}>
            <img
              role="presentation"
              src={photo}
            />
          </Card>
        )) :
        <Heading>Loading you some humans</Heading>}
      </CatsWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    humans: state.humans.list,
    humansAreLoaded: state.humans.isLoaded,
  };
}

export default connect(mapStateToProps, { loadHumans })(Humans);
