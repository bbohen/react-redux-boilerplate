import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, Heading } from 'components';
import Wrapper from './Wrapper';
import HumanModal from '../HumanModal';
import { load as loadHumans, select as selectHuman } from '../../redux/modules/humans';
import { load as loadLoremIpsum } from '../../redux/modules/loremIpsum';

export class UnconnectedHumans extends Component {
  static propTypes = {
    humansAreLoaded: PropTypes.bool.isRequired,
    loadHumans: PropTypes.func.isRequired,
    loadLoremIpsum: PropTypes.func.isRequired,
    loremIpsumIsLoaded: PropTypes.bool.isRequired,
    humans: PropTypes.arrayOf(PropTypes.shape),
    loremIpsum: PropTypes.string,
    selectHuman: PropTypes.func,
    selectedHuman: PropTypes.shape({
      name: PropTypes.string,
    }),
  }

  static defaultProps = {
    humans: [],
    loremIpsum: 'Loading...',
    selectHuman: () => false,
    selectedHuman: undefined,
  }

  constructor(props) {
    super(props);
    this.selectHuman = this.selectHuman.bind(this);
  }

  componentWillMount() {
    const { humansAreLoaded, loremIpsumIsLoaded } = this.props;

    if (!humansAreLoaded) {
      this.props.loadHumans();
    }

    if (!loremIpsumIsLoaded) {
      this.props.loadLoremIpsum();
    }
  }

  selectHuman(indexToSelect) {
    this.props.selectHuman(indexToSelect);
  }

  render() {
    const { humans, loremIpsum, selectedHuman } = this.props;

    return (
      <Wrapper>
        {selectedHuman &&
          <HumanModal
            age={selectedHuman.age}
            bio={loremIpsum}
            birthday={selectedHuman.birthday}
            email={selectedHuman.email}
            imageUrl={selectedHuman.photo}
            onClick={this.selectHuman}
            phone={selectedHuman.phone}
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

export function mapStateToProps({ humans, loremIpsum }) {
  return {
    humans: humans.list,
    humansAreLoaded: humans.isLoaded,
    indexOfSelectedHuman: humans.indexOfSelectedHuman,
    loremIpsumIsLoaded: loremIpsum.isLoaded,
    loremIpsum: loremIpsum.content[0],
    selectedHuman: humans.list[humans.indexOfSelectedHuman],
  };
}

export default connect(
  mapStateToProps,
  { loadHumans,
    loadLoremIpsum,
    selectHuman,
  })(UnconnectedHumans);
