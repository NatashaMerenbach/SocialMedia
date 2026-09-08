import {StyleSheet} from 'react-native';
import {fontScale} from './scaling';
import {getFontFamily} from '../../helper';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  backgroundPink: {
    backgroundColor: '#F35BAC',
  },
  textBlack: {
    color: '#022150',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textPink: {
    color: '#F35BAC',
  },
  textBold: {
    fontFamily: getFontFamily('600'),
  },
  textRegular: {
    fontFamily: getFontFamily('400'),
  },
  textMedium: {
    fontFamily: getFontFamily('500'),
  },
  textSize14: {
    fontSize: fontScale(14),
  },
});

export default globalStyle;
