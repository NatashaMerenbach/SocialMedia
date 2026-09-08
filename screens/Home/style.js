import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';
import {
  horizontalScale,
  verticalScale,
  fontScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
  },
  headerTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuIcon: {
    marginRight: horizontalScale(14),
    paddingVertical: verticalScale(10),
  },
  messageIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: horizontalScale(14),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(11),
    top: verticalScale(10),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: fontScale(6),
    fontFamily: getFontFamily('600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userStoryList: {
    flexGrow: 0,
    height: horizontalScale(100),
    width: '100%',
  },
  userPostContainer: {
    marginRight: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  titleContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  listMessage: {
    marginVertical: verticalScale(10),
    textAlign: 'center',
  },
  listFooter: {
    marginBottom: verticalScale(20),
  },
  listHeader: {
    marginBottom: verticalScale(10),
  },
  listEmpty: {
    marginTop: verticalScale(20),
  },
  postListContent: {
    paddingHorizontal: horizontalScale(16),
  },
});

export default style;
