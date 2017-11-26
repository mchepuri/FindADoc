import React from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';
import ProfileView from './ProfileView.js';
import {Header,SearchBar,Avatar} from 'react-native-elements';
import { List, ListItem } from 'react-native-elements'
const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
];
export default class App extends React.Component {
  render() {
    let pic={
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.mainContainer}>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Doctors Time', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <View style={styles.content}>
            <List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
      />
    ))
  }
</List>
           </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer:{
       flex:1                  //Step 1
   },
   content:{
       backgroundColor:'#ebeef0',
       flex:1                //Step 2
   }
});

AppRegistry.registerComponent('Ex1', () => App);
