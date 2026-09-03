import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';

const style = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    marginRight: 20,
    width: 60,
  },
  firstName: {
    fontFamily: getFontFamily('500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default style;
