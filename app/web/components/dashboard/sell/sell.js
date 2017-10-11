/* @flow */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Alert,
	Image,
	RefreshControl,
	ScrollView,
	Text as NativeText
} from 'react-native';
import {
	Container,
	Content,
	Header,
	Left,
	Right,
	Body,
	Button,
	Card,
	CardItem,
	Title,
	Text,
	Icon,
	Footer,
	FooterTab,
	Badge,
	Input,
	Form,
	Label,
	Item,
	Tabs,
	Tab,
	TabHeading
} from 'native-base';
import Color from 'color';
import AppTheme from '../../../theme/variables';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FooterCustom from '../../common_components/footer/footer';
const {
	colorPrimary,
	colorWhite,
	colorPrimaryDark,
	spaceMedium,
	spaceBig,
	spaceExtraBig,
	spaceHuge,
	spaceGiant
} = AppTheme;

export default class Sell extends Component {
	render() {
		const { navigate, goBack } = this.props.navigation;
		const { routeName } = this.props.navigation.state;

		return (
			<Container style={styles.colorPrimary}>
				<Header
					noShadow
					androidStatusBarColor={colorPrimary}
					style={styles.colorPrimary}
				>
					<Left>
						<Button
							transparent
							dark
							iconLeft
							onPress={() => navigate('Dashboard')}
						>
							<Icon name="md-arrow-back" style={styles.colorWhite} />
						</Button>
					</Left>
					<Body>
						<Title style={styles.title} onPress={() => navigate('Buy')}>
							Buy
						</Title>
					</Body>
					<Right>
						<Title style={styles.titleInactive}>Sell</Title>
					</Right>
				</Header>
				<Tabs tabBarUnderlineStyle={styles.tabUnderline}>
					<Tab
						heading={
							<TabHeading style={styles.tabs}>
								<Text>BTC</Text>
							</TabHeading>
						}
						style={styles.tabs}
					>
						<Content>
							<View
								style={{
									borderBottomWidth: 0.5,
									borderColor: colorWhite
								}}
							>
								<View
									style={[
										styles.commonContainerStyles,
										{
											padding: AppTheme.spaceBig
										}
									]}
								>
									<View
										style={[
											styles.commonContainerStyles,
											{
												borderColor: colorWhite,
												borderRightWidth: 0.5
											}
										]}
									>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Text style={styles.colorWhite}>INR</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Item style={{ borderBottomWidth: 0 }}>
												<Input
													placeholder="0.00"
													keyboardType="numeric"
													returnKeyType="go"
													placeholderTextColor={Color(colorWhite).darken(0.4)}
													style={styles.colorWhite}
												/>
											</Item>
										</View>
									</View>
									<View
										style={{
											flex: 1,
											alignItems: 'center',
											flexDirection: 'row',
											justifyContent: 'center',
											alignContent: 'center'
										}}
									>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Text style={styles.colorWhite}>BTC</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Item style={{ borderBottomWidth: 0 }}>
												<Input
													placeholder="0.00"
													placeholder="0.00"
													keyboardType="numeric"
													returnKeyType="go"
													placeholderTextColor={Color(colorWhite).darken(0.4)}
													style={styles.colorWhite}
												/>
											</Item>
										</View>
									</View>
								</View>
								<View style={styles.errorContainer}>
									<Text style={styles.errorText}>some error</Text>
								</View>
							</View>
							<View
								style={{
									borderBottomWidth: 0.8,
									borderColor: colorWhite,
									padding: AppTheme.spaceMedium
								}}
							>
								<CardItem style={styles.carditem}>
									<Left>
										<Text style={styles.colorWhite}>Deposit to</Text>
									</Left>
									<Body style={{ alignItems: 'flex-end' }}>
										<Text style={styles.colorWhite}>10000 INR wallet</Text>
									</Body>
								</CardItem>
							</View>
							<View
								style={{
									borderBottomWidth: 0.8,
									borderColor: colorWhite,
									padding: AppTheme.spaceMedium
								}}
							>
								<CardItem style={styles.carditem}>
									<Left>
										<Text style={styles.colorWhite}>Debit from</Text>
									</Left>
									<Body style={{ alignItems: 'flex-end' }}>
										<Text style={styles.colorWhite}>1.2343 BTC wallet</Text>
									</Body>
								</CardItem>
							</View>
							<View style={styles.buyButtonContainer}>
								<Button large full style={styles.buyButton}>
									<Text style={styles.buyButtonText}>Sell Bitcoin</Text>
								</Button>
							</View>
						</Content>
					</Tab>
					<Tab
						heading={
							<TabHeading style={styles.tabs}>
								<Text>ETH</Text>
							</TabHeading>
						}
						style={styles.tabs}
					>
						<Content>
							<View
								style={{
									borderBottomWidth: 0.5,
									borderColor: colorWhite
								}}
							>
								<View
									style={[
										styles.commonContainerStyles,
										{
											padding: AppTheme.spaceBig
										}
									]}
								>
									<View
										style={[
											styles.commonContainerStyles,
											{
												borderColor: colorWhite,
												borderRightWidth: 0.5
											}
										]}
									>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Text style={styles.colorWhite}>INR</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Item style={{ borderBottomWidth: 0 }}>
												<Input
													placeholder="0.00"
													keyboardType="numeric"
													returnKeyType="go"
													placeholderTextColor={Color(colorWhite).darken(0.4)}
													style={styles.colorWhite}
												/>
											</Item>
										</View>
									</View>
									<View
										style={{
											flex: 1,
											alignItems: 'center',
											flexDirection: 'row',
											justifyContent: 'center',
											alignContent: 'center'
										}}
									>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Text style={styles.colorWhite}>ETH</Text>
										</View>
										<View style={{ flex: 1, alignItems: 'center' }}>
											<Item style={{ borderBottomWidth: 0 }}>
												<Input
													placeholder="0.00"
													placeholder="0.00"
													keyboardType="numeric"
													returnKeyType="go"
													placeholderTextColor={Color(colorWhite).darken(0.4)}
													style={styles.colorWhite}
												/>
											</Item>
										</View>
									</View>
								</View>
								<View style={styles.errorContainer}>
									<Text style={styles.errorText}>some error</Text>
								</View>
							</View>
							<View
								style={{
									borderBottomWidth: 0.8,
									borderColor: colorWhite,
									padding: AppTheme.spaceMedium
								}}
							>
								<CardItem style={styles.carditem}>
									<Left>
										<Text style={styles.colorWhite}>Deposit to</Text>
									</Left>
									<Body style={{ alignItems: 'flex-end' }}>
										<Text style={styles.colorWhite}>100000 INR wallet</Text>
									</Body>
								</CardItem>
							</View>
							<View
								style={{
									borderBottomWidth: 0.8,
									borderColor: colorWhite,
									padding: AppTheme.spaceMedium
								}}
							>
								<CardItem style={styles.carditem}>
									<Left>
										<Text style={styles.colorWhite}>Debit from</Text>
									</Left>
									<Body style={{ alignItems: 'flex-end' }}>
										<Text style={styles.colorWhite}>1.2334 ETH wallet</Text>
									</Body>
								</CardItem>
							</View>
							<View style={styles.buyButtonContainer}>
								<Button large full style={styles.buyButton}>
									<Text style={styles.buyButtonText}>Sell Ethereum</Text>
								</Button>
							</View>
						</Content>
					</Tab>
				</Tabs>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginLeft: -30,
		color: colorWhite,
		fontSize: spaceExtraBig,
		color: Color(AppTheme.colorWhite).darken(0.4)
	},
	titleInactive: {
		marginRight: AppTheme.spaceExtraBig
	},
	colorWhite: {
		color: colorWhite
	},
	colorPrimary: {
		backgroundColor: colorPrimary
	},
	commonContainerStyles: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		alignContent: 'center'
	},
	buyButtonContainer: {
		padding: AppTheme.spaceBig
	},
	buyButton: {
		backgroundColor: Color(AppTheme.colorPrimary).lighten(0.9)
	},
	errorContainer: {
		marginBottom: AppTheme.spaceBig
	},
	errorText: {
		color: AppTheme.colorError,
		alignSelf: 'center'
	},
	card: {
		backgroundColor: AppTheme.colorPrimary,
		elevation: 0
	},
	carditem: {
		backgroundColor: AppTheme.colorPrimary
	},
	tabs: {
		backgroundColor: AppTheme.colorPrimary
	},
	tabUnderline: {
		height: AppTheme.spaceSmall / AppTheme.spaceSmall
	}
});
