import * as React from "react";
import { Fragment } from "react";
import { Text, View, StyleSheet, Button, Linking, Image } from "react-native";
import * as Permissions from "expo-permissions";

import { BarCodeScanner } from 'expo-barcode-scanner';

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
    this.setState({ hasCameraPermission: status === 'granted' });
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
        <View
          style={{
            flex: 1
          }}
        >
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => this.setState({ scanned: false })}
            />
          )}
        </View>
        <View style={styles.instructionTextStyle}>
          <View style={{ backgroundColor: "grey", opacity: 0.7 }}>
            <Text style={{ fontSize: 20 }}> Scan fridge's barcode to Open </Text>
            <Text style={{ textAlign: 'center', color: 'blue', fontWeight: 'bold'}}
              onPress={() => Linking.openURL('http://foodwize.co')}>
              Need Help?
            </Text>
          </View>
        </View>
        <View style={styles.qrRefStyle}>
        <Image
          source={require('../../assets/images/qrReference.png')}
          style={{opacity: 0.5}}
        />
        </View>
      </Fragment>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
  }
});
