import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';

const globalStyle = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
  },
  messageIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 11,
    top: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('600'),
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userStoryList: {
    flexGrow: 0,
    height: 100,
    width: '100%',
  },
  userPostContainer: {
    marginRight: 24,
    marginTop: 20,
  },
  titleContainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  listMessage: {
    marginVertical: 10,
    textAlign: 'center',
  },
  listFooter: {
    marginBottom: 20,
  },
  listHeader: {
    marginBottom: 10,
  },
  listEmpty: {
    marginTop: 20,
  },
  postListContent: {
    paddingHorizontal: 16,
  },
});

export default globalStyle;
