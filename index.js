import { AppRegistry } from 'react-native';
import './src/config/ReactotronConfig';
import Navigator from './src/Navigator';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
