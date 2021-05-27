import React from 'react';
import { StyleSheet, FlatList, Text, SafeAreaView, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import MessagesScreen from '../screens/MessagesScreen';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserInfoText,
    UserName,
    PostTime,
    MessageText,
    TextSection,
  } from '../styles/MessageStyles';
  import {createStackNavigator} from '@react-navigation/stack';
  import { Message } from '@material-ui/icons';
import Messagess from '../screens/MessagesScreen'

// const MessageStack = createStackNavigator();


const ChatButton = (props) => {
  // console.log(props.name)
    return (
        <Icon.Button onPress={() => navigation.navigate(props.name)}
        name = "ios-chatbox-ellipses-outline" size = {25} 
        color = "black"
        backgroundColor = "#F3F2F2" onPress = {console.log('message!')}></Icon.Button>    
    )
}

const Messages = [
    {
      id: '1',
      userName: 'Jenny Doe',
      userImg: require('../assets/users/user-1.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'John Doe',
      userImg: require('../assets/users/user-2.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '3',
      userName: 'Ken William',
      userImg: require('../assets/users/user-3.jpg'),
      messageTime: '1 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    }
  ];
  
  const MessageStack = createStackNavigator();
  
  const MessagesScreen = ({navigation}) => {
      return (
        // <MessageStack.Navigator>
        //   <Message.Screen name="Messages" component= {MessagesScreen} />
        <Container>
          <FlatList 
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
              <Card onPress={() => navigation.navigate('Chat', {userName: item.userName})}>
                <UserInfo>
                  <UserImgWrapper>
                    <UserImg source={item.userImg} />
                  </UserImgWrapper>
                  <TextSection>
                    <UserInfoText>
                      <UserName>{item.userName}</UserName>
                      <PostTime>{item.messageTime}</PostTime>
                    </UserInfoText>
                    <MessageText>{item.messageText}</MessageText>
                  </TextSection>
                </UserInfo>
              </Card>
            )}
          />
        </Container>
        // </MessageStack.Navigator>
      );
  };
    
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });

export default ChatButton;


