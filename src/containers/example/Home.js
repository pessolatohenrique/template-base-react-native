import React, { Component } from 'react';

import {
  Container, Content, Card, CardItem, Text, Body,
} from 'native-base';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { bindActionCreators } from 'redux';

import { create } from '../../actions/product';

class Home extends Component {
  componentDidMount() {
    const { product, createProduct } = this.props;
    const { list } = product;
    createProduct({ id: Math.floor(Math.random() * 1000), name: 'Course of PHP 7.1' }, list);
  }

  render() {
    const { title, product } = this.props;
    const { addedProduct } = product;

    console.tron.log('Produto adicionado: ', addedProduct);
    console.tron.log('Lista de produtos', product.list);

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
  product: PropTypes.object.isRequired,
  createProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  product: state.product,
});

const mapDispatchToProps = dispatch => bindActionCreators({ createProduct: create }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
