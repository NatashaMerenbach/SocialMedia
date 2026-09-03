import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../helper';

const style = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  userInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  userDetailsContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  userName: {
    color: '#022150',
    fontSize: 16,
    fontFamily: getFontFamily('600'),
  },
  location: {
    textAlign: 'left',
    color: '#79869F',
    fontSize: 12,
    fontFamily: getFontFamily('400'),
    marginTop: 5,
  },
  postImageContainer: {
    marginTop: 35,
    marginLeft: 10,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: '#EFF2F6',
  },
  postImage: {
    marginTop: 20,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 20,
  },
  postDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  postDetailsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  postDetailsItemComment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 27,
  },
  likes: {
    color: '#76869F',
    fontSize: 14,
    fontFamily: getFontFamily('400'),
    marginLeft: 3,
  },
  comments: {
    color: '#76869F',
    fontSize: 14,
    fontFamily: getFontFamily('400'),
    marginLeft: 3,
  },
  bookmarks: {
    color: '#76869F',
    fontSize: 14,
    fontFamily: getFontFamily('400'),
    marginLeft: 3,
  },
});

export default style;
