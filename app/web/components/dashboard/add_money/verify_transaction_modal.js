/* @flow */

import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, View, Button, Text, Icon} from 'native-base';
import { StyleSheet, Dimensions , Text as NativeText, TouchableNativeFeedback as Touch, Modal as NativeModal} from 'react-native'
import AppTheme from '../../../theme/variables';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');
const { colorPrimary, colorWhite, spaceMedium, spaceBig, spaceExtraBig, spacecolorLightGray } = AppTheme;

export default class VerifyTransactionModal extends Component {
  state = {
    paymentRef: ''
  }
  _submitEditReference = () => {
    const editRefInput = this.state.paymentRef;
    if (editRefInput.length === '') {
      alert('Please enter a valid payment reference');      
      return false;
    }
    this.props.save(editRefInput);
  }
  componentWillReceiveProps() {
    const { value } = this.props;
    this.setState({
      paymentRef: value
    })
  }
  render() {
    const { visible, close } = this.props;
    const { paymentRef } = this.state;
    return (
      <Modal
        isVisible={visible}
        onBackButtonPress={close}>
        <Form style={styles.form}>
          <View style={styles.otpInfo}>
            <Text style={styles.title}>Edit Payment Reference</Text>
            {/* <NativeText style={styles.otpInfoText}>Edit the payment Reference</NativeText> */}
          </View>
          <Item floatingLabel style={styles.item}>
            <Label>Enter Reference Code</Label>
            <Input
              returnKeyType='go'
              value={paymentRef}
              onChangeText={text => this.setState({ paymentRef: text })}
              onSubmitEditing={this._submitEditReference}
              autoCorrect={false}
              autoCapitalize='none'
            />
          </Item>
          <View style={styles.buttonContainer}>
            <Button large full style={styles.button}
              onPress={this._submitEditReference}>
              <Text uppercase={false}>Save</Text>
            </Button>
          </View>
        </Form>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    padding: spaceMedium
  },
  form:{
    backgroundColor: colorWhite,
    padding: spaceMedium,
  },
  title: {
    fontWeight: '500'
  },
  otpInfo: {

    alignItems: 'center',
  },
  otpInfoText: {
    marginTop: spaceMedium,
    textAlign: 'center',
    paddingRight: 60,
    paddingLeft: 60
  },
  item: {
    marginRight: spaceBig
  },
  itemButton: {
    marginLeft: width - 170,
    marginTop: -40
  },
  itemButtonText: {
    color: colorPrimary,
    fontWeight: '400'
  },
  button: {
    backgroundColor: colorPrimary
  },
  buttonContainer:{
    marginTop: spaceExtraBig
  }
})
