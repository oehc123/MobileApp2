import React, { Component } from "react";
import { 
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight
} from "react-native";

export default class HeadsUpScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableHighlight       //TODO going to a generic HeadsUpScreen
          onPress={() => this.props.navigation.navigate('PurchaseScreen')}
        >
          <Image
            style={styles.imageFridgeStyle}
            source={require('../../assets/images/FridgeImageWireframe.png')} //TODO implement correct fridge image//https://trello.com/c/QQ2ESYwY/94-dev-heads-up-display
          />
        </TouchableHighlight>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.textFridgeStyle}>
            Fridge_title
          </Text>
          <Text style={styles.textFridgeStyle}>
            Is now Open
          </Text>
        </View>

        <View style={styles.headsUpStyleBottom}>
          <View style={{ paddingLeft: 50 }}>
            <Image
              style={{ height: 100, width: 100}}
              source={require('../../assets/images/HeadsUpScreenMushroomWireframe.png')}  
            />
          </View>
            <View style={{ paddingBottom: 20, paddingRight: 40}}>
              <Text style={{ fontWeight: 'bold'}}> KEEP IT FRESH</Text>
              <Text>
                Please grab your meals {"\n"}
                and close the door!
              </Text>
            </View>
          </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageFridgeStyle: {
    alignSelf: 'center',
    marginTop: 130,
  },
  textFridgeStyle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  headsUpStyleBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 80,
    justifyContent: 'space-around',
    alignContent: 'flex-end',
  }
});