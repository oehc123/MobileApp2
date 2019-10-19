import * as React from "react";
import { Fragment } from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Dimensions,
  TouchableOpacity
} from "react-native";
import LottieView from "lottie-react-native";
import * as Permissions from "expo-permissions";
import { AntDesign } from "@expo/vector-icons";

import { BarCodeScanner } from "expo-barcode-scanner";

import { makeFoodWizeScreen } from '../../utils.js';

let {width, height} = Dimensions.get('window');

class BarcodeScreen extends React.Component {
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
    const { t } = this.props;
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
            <LottieView
              loop
              autoPlay
              style={{
                width: 150,
                height: 210,
                backgroundColor: 'transparent',
              }}
              source={require('./../../assets/animations/scan-camera.json')}
            />
        </View>
          <TouchableOpacity 
            style={{ position: "absolute", zIndex: 1, left: 15, top: 30 }}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <AntDesign
              name="leftcircle"
              size={40}
              color='black'
            />
          </TouchableOpacity>
        <View style={styles.instructionTextStyle}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              Scan fridge's barcode to Open
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold"
              }}
              onPress={() => Linking.openURL("http://foodwize.co")}
            >
              {t('need-help')}
            </Text>
            <TouchableOpacity //TODO this should be deleted. its added only for testing purposes
              onPress={() => {
                this.props.navigation.navigate("HeadsUpScreen");
              }}
            >
              <Text> press here to Simulate forward DEV MDOE </Text>
            </TouchableOpacity>
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
    borderTopWidth: height/8 + 30,
    borderBottomWidth: height/2,
    borderLeftWidth: width/9,
    borderColor:'rgba(0,0,0,0.6)',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default makeFoodWizeScreen(BarcodeScreen)