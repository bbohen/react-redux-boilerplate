import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, Heading } from '../../components';
import Wrapper from './Wrapper';
import { load as loadHumans, select as selectHuman } from '../../redux/modules/humans';
import Modal from './Modal';

class Humans extends Component {
  static propTypes = {
    humansAreLoaded: PropTypes.bool.isRequired,
    loadHumans: PropTypes.func.isRequired,
    humans: PropTypes.arrayOf(PropTypes.shape),
    selectHuman: PropTypes.func,
    selectedHuman: PropTypes.shape({
      name: PropTypes.string,
    }),
  }

  static defaultProps = {
    humans: [],
    selectHuman: () => false,
    selectedHuman: undefined,
  }

  constructor(props) {
    super(props);
    this.selectHuman = this.selectHuman.bind(this);
  }

  componentWillMount() {
    const { humansAreLoaded } = this.props;

    if (!humansAreLoaded) {
      this.props.loadHumans();
    }
  }

  selectHuman(indexToSelect) {
    const selectedIndex = typeof indexToSelect === 'number' ? indexToSelect : undefined;
    this.props.selectHuman(selectedIndex);
  }

  render() {
    const { humans, selectedHuman } = this.props;

    return (
      <Wrapper>
        {selectedHuman &&
          <Modal
            email={selectedHuman.email}
            imageUrl={selectedHuman.photo}
            onClick={this.selectHuman}
            name={selectedHuman.name}
            surname={selectedHuman.surname}
          />}
        {humans.length ? humans.map(({ email, photo }, index) => (
          <Card
            index={index}
            key={email}
            onClick={this.selectHuman}
            imageUrl={photo}
          />)) :
        <Heading>Loading you some humans</Heading>}
      </Wrapper>
    );
  }
}

function mapStateToProps({ humans }) {
  return {
    humans: humans.list,
    humansAreLoaded: humans.isLoaded,
    indexOfSelectedHuman: humans.indexOfSelectedHuman,
    selectedHuman: humans.list[humans.indexOfSelectedHuman],
  };
}

export default connect(mapStateToProps, { loadHumans, selectHuman })(Humans);
