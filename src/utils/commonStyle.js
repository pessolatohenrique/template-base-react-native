import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../constants/general';

export default StyleSheet.create({
  error: {
    paddingLeft: 10,
    paddingTop: 5,
    color: 'red',
  },
  priorirty: {
    flex: 1,
  },
  header: {
    backgroundColor: MAIN_COLOR,
  },
  headerCustomPadding: {
    paddingLeft: 20,
  },
  fontBold: {
    fontWeight: 'bold',
  },
  searchPadding: {
    paddingLeft: 10,
  },
  containerCenter: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  colorTheme: {
    color: MAIN_COLOR,
  },
});
