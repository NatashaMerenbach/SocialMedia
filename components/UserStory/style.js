import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    marginRight: horizontalScale(20),
    width: horizontalScale(73),
  },
  firstName: {
    fontFamily: getFontFamily('500'),
    fontSize: fontScale(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});

export default style;
