import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Title from './components/Title/Title';
import globalStyle from './assets/styles/globalStyle';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';

const userStories = [
  {
    firstName: 'Joseph',
    id: 1,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Angel',
    id: 2,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'White',
    id: 3,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Olivier',
    id: 4,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nata',
    id: 5,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nocolas',
    id: 6,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nino',
    id: 7,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Nana',
    id: 8,
    profileImage: require('./assets/images/default_profile.png'),
  },
  {
    firstName: 'Adam',
    id: 9,
    profileImage: require('./assets/images/default_profile.png'),
  },
];

const userPosts = [
  {
    id: 1,
    firstName: 'Joseph',
    lastName: 'Smith',
    location: 'New York, USA',
    likes: 120,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 15,
    bookmarks: 55,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 2,
    firstName: 'Angel',
    lastName: 'Johnson',
    location: 'London, UK',
    likes: 85,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 10,
    bookmarks: 30,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 3,
    firstName: 'White',
    lastName: 'Doe',
    location: 'Los Angeles, USA',
    likes: 200,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 25,
    bookmarks: 20,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 4,
    firstName: 'Olivier',
    lastName: 'Martin',
    location: 'Paris, France',
    likes: 62,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 3,
    bookmarks: 20,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 5,
    firstName: 'Nata',
    lastName: 'Smith',
    location: 'Tokyo, Japan',
    likes: 180,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 22,
    bookmarks: 15,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 6,
    firstName: 'Nocolas',
    lastName: 'Johnson',
    location: 'Berlin, Germany',
    likes: 95,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 12,
    bookmarks: 15,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 7,
    firstName: 'Nino',
    lastName: 'Johnson',
    location: 'London, UK',
    likes: 95,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 12,
    bookmarks: 15,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 8,
    firstName: 'Adam',
    lastName: 'Johnson',
    location: 'Boston, USA',
    likes: 26,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 8,
    bookmarks: 13,
    image: require('./assets/images/default_post.png'),
  },
  {
    id: 9,
    firstName: 'Nana',
    lastName: 'Martin',
    location: 'Boston, USA',
    likes: 32,
    profileImage: require('./assets/images/default_profile.png'),
    comments: 5,
    bookmarks: 4,
    image: require('./assets/images/default_post.png'),
  },
];

const userStoriesPageSize = 4;

const paginate = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  return data.slice(startIndex, startIndex + pageSize);
};

const userPostsPageSize = 2;

const App = () => {
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
    <SafeAreaView style={globalStyle.screen}>
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
            <View style={globalStyle.header}>
              <Title title="Let’s Explore" />
              <TouchableOpacity
                accessibilityLabel="Open messages"
                accessibilityRole="button"
                activeOpacity={0.7}
                onPress={() => console.log('Envelope pressed')}
                style={globalStyle.messageIcon}>
                <FontAwesomeIcon icon={faEnvelope} size={20} color="#898DAE" />
                <View style={globalStyle.messageNumberContainer}>
                  <Text style={globalStyle.messageNumber}>2</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={globalStyle.userStoryContainer}>
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
                style={globalStyle.userStoryList}
                keyExtractor={item => String(item.id)}
                renderItem={({item}) => (
                  <UserStory
                    firstName={item.firstName}
                    profileImage={item.profileImage}
                  />
                )}
              />
            </View>
            <View style={globalStyle.titleContainer}>
              <Title title="Posts" />
            </View>
          </View>
        }
        ListFooterComponent={
          isLoadingUserPost ? (
            <Text style={globalStyle.listMessage}>Loading more posts...</Text>
          ) : null
        }
        ListEmptyComponent={
          <Text style={globalStyle.listMessage}>No posts available.</Text>
        }
        ListFooterComponentStyle={globalStyle.listFooter}
        ListHeaderComponentStyle={globalStyle.listHeader}
        ListEmptyComponentStyle={globalStyle.listEmpty}
        data={userPostRenderedData}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        contentContainerStyle={globalStyle.postListContent}
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

export default App;
