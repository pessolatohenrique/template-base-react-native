import React, { Component } from 'react';

import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Home extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};
