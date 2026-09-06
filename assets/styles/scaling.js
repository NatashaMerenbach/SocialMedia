import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375;

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;
const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseForFontSize = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const fontScale = size =>
  Math.round((width / guidelineBaseForFontSize()) * size);

export {horizontalScale, verticalScale, fontScale};
