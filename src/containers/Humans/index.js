import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, Heading } from '../../components';
import Wrapper from './Wrapper';
import { load as loadHumans } from '../../redux/modules/humans';

class Humans extends Component {
  static propTypes = {
    humans: PropTypes.arrayOf(PropTypes.shape),
    humansAreLoaded: PropTypes.bool.isRequired,
    loadHumans: PropTypes.func.isRequired,
  }

  static defaultProps = {
    humans: [{}],
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
      <Wrapper>
        {humans.length ? humans.map(({ email, photo }) => (
          <Card key={email}>
            <img
              alt=""
              src={photo}
            />
          </Card>
        )) :
        <Heading>Loading you some humans</Heading>}
      </Wrapper>
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
