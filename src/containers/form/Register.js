import React from 'react';
import {
  Container, Content, Form, Item, Input, Label, Text, Button,
} from 'native-base';

// import { Container } from './styles';

export default props => (
  <Container>
    <Content>
      <Form>
        <Item stackedLabel>
          <Label>Username</Label>
          <Input />
        </Item>
        <Item stackedLabel last>
          <Label>Password</Label>
          <Input />
        </Item>
        <Button block success>
          <Text>Save</Text>
        </Button>
      </Form>
    </Content>
  </Container>
);
