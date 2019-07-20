import React, { Component } from 'react';
import {
  Fab, Button, Icon, View,
} from 'native-base';

class FabExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'false',
    };
  }

  render() {
    const { active } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Fab
          active={active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !active })}
        >
          <Icon name="share" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </View>
    );
  }
}

export default FabExample;
