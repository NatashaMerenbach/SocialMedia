import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';
import {fontScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('600'),
    fontSize: fontScale(24),
  },
});

export default style;
