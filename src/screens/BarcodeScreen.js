import * as React from "react";
import { Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Dimensions,
  Image
} from "react-native";
import * as Permissions from "expo-permissions";
import { Ionicons } from "@expo/vector-icons";

import { BarCodeScanner } from "expo-barcode-scanner";
import { TouchableHighlight } from "react-native-gesture-handler";

let {width, height} = Dimensions.get('window');
export default class BarcodeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <Fragment>
        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.camaraHoleStyle}>
        <TouchableHighlight //TODO this should be deleted. its added only for testing purposes
              onPress={() => {
                this.props.navigation.navigate("HeadsUpScreen");
              }}
          >
          <Image
                source={require("../../assets/images/qrReference.png")}
                style={{ opacity: 0.5,  }}
              />
        </TouchableHighlight>
        </View>
        <View style={{ position: "absolute", right: 10, top: 20 }}>
            <Ionicons
              name="md-close-circle"
              size={40}
              color='black'
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
        </View>
        <View style={styles.instructionTextStyle}>
            <View style={{ backgroundColor: "grey", opacity: 0.7 }}>
              <Text style={{ fontSize: 20 }}>
                Scan fridge's barcode to Open
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "blue",
                  fontWeight: "bold"
                }}
                onPress={() => Linking.openURL("http://foodwize.co")}
              >
                Need Help?
              </Text>
            </View>
        </View>
      </Fragment>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    this.props.navigation.navigate("HeadsUpScreen"); //TODO going to a generic HeadsUpScreen
  };
}

const styles = StyleSheet.create({
  instructionTextStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  qrRefStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  camaraHoleStyle: {
    position: 'absolute',
    height: height,
    width: width,
    borderRightWidth: width/9,
    borderTopWidth: height/8,
    borderBottomWidth: height/2,
    borderLeftWidth: width/9,
    borderColor:'rgba(0,0,0,0.6)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});