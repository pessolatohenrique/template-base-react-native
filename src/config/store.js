// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from 'redux';
import { reducers } from '../reducers';

const storeConfig = () => createStore(reducers);

export default storeConfig;
