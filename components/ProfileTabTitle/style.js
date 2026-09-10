import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';
import {fontScale, horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('500'),
    fontSize: fontScale(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('400'),
    fontSize: fontScale(16),
  },
});

export default style;
