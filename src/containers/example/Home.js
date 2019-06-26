import React, { Component } from 'react';

// import { View, Text } from 'react-native';
import {
  Container, Header, Content, Card, CardItem, Text, Body,
} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Home extends Component {
  componentDidMount() {
    const { title } = this.props;
    console.tron.log('Olá mundo reactotron: ', title);
  }

  render() {
    const { title } = this.props;
    return (
      <Container padder>
        <Content>
          <Card>
            <CardItem header>
              <Text>{title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Your text here</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string.isRequired,
};
