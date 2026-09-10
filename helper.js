import {Platform} from 'react-native';

export const getFontFamily = fontWeight => {
  switch (fontWeight) {
    case '100':
      return 'Inter-Thin';
    case '200':
      return 'Inter-ExtraLight';
    case '300':
      return 'Inter-Light';
    case 'normal':
      return 'Inter-Regular';
    case '400':
      return 'Inter-Regular';
    case '500':
      return 'Inter-Medium';
    case '600':
      return Platform.OS === 'ios'
        ? 'Inter18pt-SemiBold'
        : 'Inter_18pt-SemiBold';
    case 'bold':
      return 'Inter-Bold';
    case '700':
      return 'Inter-Bold';
    case '800':
      return 'Inter-ExtraBold';
    case '900':
      return 'Inter-Black';
    default:
      return 'Inter-Regular'; // Default font family if weight is not specified
  }
};
