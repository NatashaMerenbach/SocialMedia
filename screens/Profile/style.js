import {StyleSheet} from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../helper';

const style = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  profileImage: {
    borderRadius: horizontalScale(54.5),
    height: horizontalScale(110),
    width: horizontalScale(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderColor: '#0150EC',
    borderRadius: horizontalScale(110),
    borderWidth: 1,
    padding: horizontalScale(4),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('600'),
    fontSize: fontScale(20),
  },
  statAmount: {
    fontFamily: getFontFamily('600'),
    fontSize: fontScale(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontfamily: getFontFamily('400'),
    fontSize: fontScale('14'),
    color: '#79869F',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
