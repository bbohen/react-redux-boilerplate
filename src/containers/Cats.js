import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { load, trigger } from '../redux/modules/cats';

class Cats extends Component {
  static propTypes = {
    cats: PropTypes.shape.isRequired,
    load: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.load();
  }

  render() {
    const { cats } = this.props;
    return (
      <div>
        Cats loaded: {String(this.props.cats.length)}
        {cats.map(cat => (
          <div>
            <img role="presentation" src={cat.data.thumbnail} />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cats: state.cats.list,
  };
}

export default connect(mapStateToProps, { load, trigger })(Cats);
