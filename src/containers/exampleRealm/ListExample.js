import React, { Component } from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
} from 'native-base';
import FabExample from './FabExample';

const data = [
  {
    id: 1,
    name: 'React Native',
    description: 'Utilizado para desenvolver apps mobile',
    imageUrl: 'https://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png',
    category: 'Mobile',
  },
  {
    id: 2,
    name: 'React JS',
    description: 'Utilizado para desenvolver interfaces web',
    imageUrl: 'https://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png',
    category: 'Front',
  },
];

class ListExample extends Component {
  renderLanguage = ({ item }) => (
    <ListItem avatar>
      <Left>
        <Thumbnail
          source={{
            uri: item.imageUrl,
          }}
          small
        />
      </Left>
      <Body>
        <Text>{item.name}</Text>
        <Text note>{item.description}</Text>
      </Body>
      <Right>
        <Text note>{item.category}</Text>
      </Right>
    </ListItem>
  );

  render() {
    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderLanguage}
            />
          </List>
        </Content>
        <FabExample />
      </Container>
    );
  }
}

export default ListExample;
