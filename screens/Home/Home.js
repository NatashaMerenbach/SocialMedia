import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Title from '../../components/Title/Title';
import style from './style';
import UserStory from '../../components/UserStory/UserStory';
import UserPost from '../../components/UserPost/UserPost';
import {fontScale} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';

const defaultProfileImage = require('../../assets/images/default_profile.png');
const defaultPostImage = require('../../assets/images/default_post.png');

const userStories = [
  {
    firstName: 'Joseph',
    id: 1,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'Angel',
    id: 2,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'White',
    id: 3,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'Olivier',
    id: 4,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'Nata',
    id: 5,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'Nocolas',
    id: 6,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'Nino',
    id: 7,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'Nana',
    id: 8,
    profileImage: defaultProfileImage,
  },
  {
    firstName: 'Adam',
    id: 9,
    profileImage: defaultProfileImage,
  },
];

const userPosts = [
  {
    id: 1,
    firstName: 'Joseph',
    lastName: 'Smith',
    location: 'New York, USA',
    likes: 120,
    profileImage: defaultProfileImage,
    comments: 15,
    bookmarks: 55,
    image: defaultPostImage,
  },
  {
    id: 2,
    firstName: 'Angel',
    lastName: 'Johnson',
    location: 'London, UK',
    likes: 85,
    profileImage: defaultProfileImage,
    comments: 10,
    bookmarks: 30,
    image: defaultPostImage,
  },
  {
    id: 3,
    firstName: 'White',
    lastName: 'Doe',
    location: 'Los Angeles, USA',
    likes: 200,
    profileImage: defaultProfileImage,
    comments: 25,
    bookmarks: 20,
    image: defaultPostImage,
  },
  {
    id: 4,
    firstName: 'Olivier',
    lastName: 'Martin',
    location: 'Paris, France',
    likes: 62,
    profileImage: defaultProfileImage,
    comments: 3,
    bookmarks: 20,
    image: defaultPostImage,
  },
  {
    id: 5,
    firstName: 'Nata',
    lastName: 'Smith',
    location: 'Tokyo, Japan',
    likes: 180,
    profileImage: defaultProfileImage,
    comments: 22,
    bookmarks: 15,
    image: defaultPostImage,
  },
  {
    id: 6,
    firstName: 'Nocolas',
    lastName: 'Johnson',
    location: 'Berlin, Germany',
    likes: 95,
    profileImage: defaultProfileImage,
    comments: 12,
    bookmarks: 15,
    image: defaultPostImage,
  },
  {
    id: 7,
    firstName: 'Nino',
    lastName: 'Johnson',
    location: 'London, UK',
    likes: 95,
    profileImage: defaultProfileImage,
    comments: 12,
    bookmarks: 15,
    image: defaultPostImage,
  },
  {
    id: 8,
    firstName: 'Adam',
    lastName: 'Johnson',
    location: 'Boston, USA',
    likes: 26,
    profileImage: defaultProfileImage,
    comments: 8,
    bookmarks: 13,
    image: defaultPostImage,
  },
  {
    id: 9,
    firstName: 'Nana',
    lastName: 'Martin',
    location: 'Boston, USA',
    likes: 32,
    profileImage: defaultProfileImage,
    comments: 5,
    bookmarks: 4,
    image: defaultPostImage,
  },
];

const userStoriesPageSize = 4;

const paginate = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};

const userPostsPageSize = 2;

const Home = ({navigation}) => {
  const [userStoryCurrentPage, setUserStoryCurrentPage] = useState(1);
  const [userStoryRenderedData, setUserStoryRenderedData] = useState([]);
  const [isLoadingUserStory, setIsLoadingUserStory] = useState(true);

  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRenderedData] = useState([]);
  const [isLoadingUserPost, setIsLoadingUserPost] = useState(true);
  useEffect(() => {
    setIsLoadingUserStory(true);
    setIsLoadingUserPost(true);

    const storyData = paginate(
      userStories,
      1,
      userStoryCurrentPage * userStoriesPageSize,
    );
    const postData = paginate(
      userPosts,
      1,
      userPostCurrentPage * userPostsPageSize,
    );

    setUserStoryRenderedData(storyData);
    setUserPostRenderedData(postData);
    setIsLoadingUserStory(false);
    setIsLoadingUserPost(false);
  }, [userPostCurrentPage, userStoryCurrentPage]);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (
            !isLoadingUserPost &&
            userPostRenderedData.length < userPosts.length
          ) {
            setIsLoadingUserPost(true);
            setUserPostCurrentPage(currentPage => currentPage + 1);
          }
        }}
        ListHeaderComponent={
          <View>
            <View style={style.header}>
              <View style={style.headerTitleContainer}>
                <TouchableOpacity
                  accessibilityLabel="Open menu"
                  accessibilityRole="button"
                  activeOpacity={0.7}
                  onPress={() => navigation.openDrawer()}
                  style={style.menuIcon}>
                  <FontAwesomeIcon
                    icon={faBars}
                    size={fontScale(20)}
                    color="#022150"
                  />
                </TouchableOpacity>
                <Title title="Let’s Explore" />
              </View>
              <TouchableOpacity
                accessibilityLabel="Open messages"
                accessibilityRole="button"
                activeOpacity={0.7}
                onPress={() => {
                  console.log('Envelope pressed');
                }}
                style={style.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size={fontScale(20)}
                  color="#898DAE"
                />
                <View style={style.messageNumberContainer}>
                  <Text style={style.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.userStoryContainer}>
              <FlatList
                alwaysBounceHorizontal
                directionalLockEnabled
                nestedScrollEnabled
                onEndReachedThreshold={0.2}
                onEndReached={() => {
                  if (
                    !isLoadingUserStory &&
                    userStoryRenderedData.length < userStories.length
                  ) {
                    setIsLoadingUserStory(true);
                    setUserStoryCurrentPage(currentPage => currentPage + 1);
                  }
                }}
                data={userStoryRenderedData}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={style.userStoryList}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <UserStory
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                )}
              />
            </View>
            <View style={style.titleContainer}>
              <Title title="Posts" />
            </View>
          </View>
        }
        ListFooterComponent={
          isLoadingUserPost ? (
            <Text style={style.listMessage}>Loading more posts...</Text>
          ) : null
        }
        ListEmptyComponent={
          <Text style={style.listMessage}>No posts available.</Text>
        }
        ListFooterComponentStyle={style.listFooter}
        ListHeaderComponentStyle={style.listHeader}
        ListEmptyComponentStyle={style.listEmpty}
        data={userPostRenderedData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={style.postListContent}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <UserPost
            key={'userPost' + item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            likes={item.likes}
            comments={item.comments}
            bookmarks={item.bookmarks}
            firstName={item.firstName}
            lastName={item.lastName}
            location={item.location}
            profileImage={item.profileImage}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
