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
import { getRealm } from '../../config/realm';
import { createLanguages, addNewLanguage } from './Functions';

class ListExample extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }

  async componentDidMount() {
    const realm = await getRealm();
    await createLanguages(realm);
    this.setState({ realm });
  }

  create = async () => {
    const realm = await getRealm();
    await addNewLanguage(realm);
    this.setState({ realm });
  };

  delete = async () => {
    const realm = await getRealm();

    realm.write(() => {
      const allLanguages = realm.objects('Language');
      realm.delete(allLanguages);
    });

    this.setState({ realm });
  };

  renderLanguage = ({ item }) => (
    <ListItem avatar>
      <Left>
        <Thumbnail
          source={{
            uri: item.image,
          }}
          small
        />
      </Left>
      <Body>
        <Text>{item.name}</Text>
        <Text note>{item.description}</Text>
      </Body>
      <Right>
        <Text note>{item.category.name}</Text>
      </Right>
    </ListItem>
  );

  render() {
    const { realm } = this.state;

    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={realm ? realm.objects('Language').sorted('name') : []}
              keyExtractor={item => item.id.toString()}
              renderItem={this.renderLanguage}
            />
          </List>
        </Content>
        <FabExample onAdd={this.create} onDelete={this.delete} />
      </Container>
    );
  }
}

export default ListExample;
