import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Heading from '../components/Heading';
import { trigger } from '../redux/modules/cats';

class Cats extends Component {
  render() {
    return (
      <div onClick={() => this.props.trigger()}>
        Triggered: {String(this.props.cats.triggered)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cats: state.cats,
  };
}

export default connect(mapStateToProps, { trigger })(Cats);
