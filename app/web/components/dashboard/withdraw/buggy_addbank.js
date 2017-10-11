/* @flow */

import React, { Component } from 'react';
import {
	Container,
	Header,
	Content,
	Form,
	Item,
	Input,
	Label,
	View,
	Button,
	Text,
	Icon
} from 'native-base';
import {
	StyleSheet,
	Dimensions,
	Text as NativeText,
	TouchableNativeFeedback as Touch,
	Modal as NativeModal,
	ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import AppTheme from '../../../theme/variables';

const { width, height } = Dimensions.get('window');
const {
	colorPrimary,
	colorWhite,
	spaceMedium,
	spaceBig,
	spaceExtraBig,
	spacecolorLightGray
} = AppTheme;

export default class AddBankModal extends Component {
	state = {
    paymentRef: ''
  }
	_focusInput(inputField) {
		this[inputField]._root.focus();
	}
	_saveBankDetails = () => {
		let accountNumber = this.accountNumber.props.value;
		if (accountNumber.length != 6) {
			alert('Fields are empty');
			return false;
		}
		this.props.save(accountNumber);
	};
	render() {
    const { visible, close } = this.props;
    const { paymentRef } = this.state;    
		// const { accountNo, branchName, bankhName, ifsc, city, state } = this.state;
		return (
			<Modal isVisible={visible} onBackButtonPress={close}>
				<ScrollView>
					<Form style={styles.form}>
						<View style={styles.otpInfo}>
							<Text style={styles.title}>Add Bank (One Time Process)</Text>
							<NativeText style={styles.otpInfoText}>
								Your Account Name is same as entered in KYC.
							</NativeText>
						</View>
						<Item floatingLabel style={styles.item}>
							<Label>Enter Account Number</Label>
							<Input
								returnKeyType='go'
								value={paymentRef}
								onChangeText={text => this.setState({ paymentRef: text })}
								autoCorrect={false}
								autoCapitalize='none'
							/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label>Enter Bank Name</Label>
							<Input
								returnKeyType="go"
								getRef={input => (this.bankhName = input)}
								onSubmitEditing={() => this._focusInput('branchName')}
								autoCorrect={false}
								autoCapitalize="none"
							/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label>Enter Branch Name</Label>
							<Input
								returnKeyType="go"
								getRef={input => (this.branchName = input)}
								onSubmitEditing={() => this._focusInput('ifsc')}
								autoCorrect={false}
								autoCapitalize="none"
							/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label>Enter IFSC Code</Label>
							<Input
								returnKeyType="go"
								getRef={input => (this.ifsc = input)}
								onSubmitEditing={() => this._focusInput('city')}
								autoCorrect={false}
								autoCapitalize="none"
							/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label>Enter City </Label>
							<Input
								returnKeyType="go"
								getRef={input => (this.city = input)}
								onSubmitEditing={() => this._focusInput('state')}
								autoCorrect={false}
								autoCapitalize="none"
							/>
						</Item>
						<Item floatingLabel style={styles.item}>
							<Label>Enter State</Label>
							<Input
								returnKeyType="go"
								getRef={input => (this.state = input)}
								onSubmitEditing={this._saveBankDetails}
								autoCorrect={false}
								autoCapitalize="none"
							/>
						</Item>

						<View style={styles.buttonContainer}>
							<Button
								large
								full
								style={styles.button}
								onPress={this._saveBankDetails}
							>
								<Text uppercase={false}>Save</Text>
							</Button>
						</View>
					</Form>
				</ScrollView>
			</Modal>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	modal: {
		padding: spaceMedium
	},
	form: {
		backgroundColor: colorWhite,
		padding: spaceMedium
	},
	title: {
		fontWeight: '500'
	},
	otpInfo: {
		alignItems: 'center'
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
	buttonContainer: {
		marginTop: spaceExtraBig
	}
});
