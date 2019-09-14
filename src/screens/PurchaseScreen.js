import React,{ Component } from "react";
import { 
  View,
  Text,
  Image
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements'

export default class PurchaseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: { borderBottomWidth: 0, height: 60 },
      headerLeft: (
        <Ionicons name='md-refresh-circle'
          size={50}
          rotate={30}
          color='black'
          style={{ marginLeft: 10, transform: [{scaleX: -1,}] }}
          onPress={() => {
            navigation.navigate('BarcodeScreen');
          }}
        />
      ),
    };
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3, alignSelf: 'center', justifyContent: 'center' }}>
          <Image source={require('../../assets/images/PurchaseScreenTomatoe.png')} />
          <Text style={{ fontSize: 40, alignSelf: 'center', fontWeight: 'bold'}}>EAT HAPPY</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <Button 
          title="View Receipt"
          onPress={ ()=> console.log('Jose TODO View Receipt pressed')}
          buttonStyle={{ width: 130, height: 80 }}
				/>
        <Button 
          title="DONE"
          onPress={ ()=> this.props.navigation.navigate('MainScreen')}
          buttonStyle={{ width: 130, height: 80 }}
				/>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 25 }}>Thank you for using Foodwizw</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold'}}
            onPress={() => console.log('jose TODO send Feedback pressed')}>
              Send Feedback
          </Text>
        </View>
      </View>
    );
  }
}