import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userImageContainer: {
    borderWidth: 1,
    borderRadius: horizontalScale(65),
    borderColor: '#F35BAC',
    padding: horizontalScale(3),
  },
  image: {
    width: horizontalScale(65),
    height: horizontalScale(65),
  },
});

export default style;
