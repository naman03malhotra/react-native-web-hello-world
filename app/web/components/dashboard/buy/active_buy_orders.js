import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image,
  ScrollView,
  RefreshControl
} from 'react-native';
import { Container, Content, Header, Left, Right, Body, Card, CardItem, Button, Title, Text, Icon, Footer, FooterTab, Badge, Thumbnail} from 'native-base';
import AppTheme from '../../../theme/variables';

import FooterCustom from '../../common_components/footer/footer';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Hr from '../../common_components/hr/hr';
import APIManager from '../../../utils/APIManager';

const { colorPrimary, colorWhite, colorError, colorClouds, colorWarning, colorPrimaryDark, colorPitchBlack, colorLightGray,spaceMedium, spaceBig, spaceSmall, spaceExtraBig, spaceHuge, spaceGiant } = AppTheme;

export default class Passbook extends Component {

  state = {
    refreshing: false
  }

  _onRefresh = () => {

  }
  handleHardwareBackPress = () => {
    const { navigate, goBack } = this.props.navigation;
    goBack();
    return true;
  }
  render() {
    const { navigate, goBack } = this.props.navigation;
    const { routeName } = this.props.navigation.state;
    const { refreshing } = this.state;
    return (

      <Container>

        <Header androidStatusBarColor={colorPrimary} noShadow style={styles.header}>
          <Left>
            <Button transparent dark onPress={() => goBack()}>
              <Icon name='arrow-back' style={styles.colorWhite} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.title}>Transaction History</Text>
          </Body>
        </Header>
        <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this._onRefresh}
          />
        }>
        <Content style={{backgroundColor: colorPrimary}}>

          <View style={styles.cardContainer}>
            <Card>
              <CardItem>
                <Left>
                  <Text note>TXN ID : D1289378</Text>
                </Left>
                <Right>
                  <Button iconRight transparent>
                    <Text style={styles.successIndicatorText}>Success</Text>
                    <Icon name='ios-checkmark-circle' style={[styles.commonStyles, styles.successIndicatorIcon]} />
                  </Button>
                </Right>
              </CardItem>
              <Hr lineStyle={{backgroundColor: colorClouds, height: 0.4}} />
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../assets/img/alco-icon.png')} />
                  <Body>
                    <Text>Added Money</Text>
                    <Text note style={styles.transactionInfoText}>Dec 15, 2017 9:00 AM</Text>
                    <Text note style={styles.transactionInfoText}>Ref: SBI21873498689</Text>
                  </Body>
                </Left>
              </CardItem>
              <Hr lineStyle={{backgroundColor: colorClouds, height: 0.4}} />
              <CardItem>
                <Left>
                  <Body>
                    <Text note>Total Amount</Text>
                  </Body>
                </Left>
                <Right>
                  <Button iconLeft transparent>
                    <AwesomeIcon name='inr' style={[styles.commonStyles, styles.amountTextIcon]}/>
                    <Text style={styles.amountText}>10000</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Text note>TXN ID : D1289378</Text>
                </Left>
                <Right>
                  <Button danger iconRight transparent>
                    <Text style={styles.warningIndicatorText}>Pending</Text>
                    <Icon name='ios-clock' style={[styles.commonStyles, styles.warningIndicatorIcon]} />
                  </Button>
                </Right>
              </CardItem>
              <Hr lineStyle={{backgroundColor: colorClouds, height: 0.4}} />
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../assets/img/alco-icon.png')} />
                  <Body>
                    <Text>Added Money</Text>
                    <Text note style={styles.transactionInfoText}>Dec 15, 2017 9:00 AM</Text>
                    <Text note style={styles.transactionInfoText}>Ref: SBI21873498689</Text>
                  </Body>
                </Left>
              </CardItem>
              <Hr lineStyle={{backgroundColor: colorClouds, height: 0.4}} />
              <CardItem>
                <Left>
                  <Body>
                    <Text note>Total Amount</Text>
                  </Body>
                </Left>
                <Right>
                  <Button iconLeft transparent>
                    <AwesomeIcon name='inr' style={[styles.commonStyles, styles.amountTextIcon]}/>
                    <Text style={styles.amountText}>10000</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>

            <Card>
              <CardItem>
                <Left>
                  <Text note>TXN ID : D1289378</Text>
                </Left>
                <Right>
                  <Button danger iconRight transparent>
                    <Text style={styles.errorIndicatorText}>Cancelled</Text>
                    <Icon name='ios-close-circle' style={[styles.commonStyles, styles.errorIndicatorIcon]} />
                  </Button>
                </Right>
              </CardItem>
              <Hr lineStyle={{backgroundColor: colorClouds, height: 0.4}} />
              <CardItem>
                <Left>
                  <Thumbnail source={require('../../../assets/img/alco-icon.png')} />
                  <Body>
                    <Text>Added Money</Text>
                    <Text note style={styles.transactionInfoText}>Dec 15, 2017 9:00 AM</Text>
                    <Text note style={styles.transactionInfoText}>Transaction was cancelled by you</Text>
                  </Body>
                </Left>
              </CardItem>
              <Hr lineStyle={{backgroundColor: colorClouds, height: 0.4}} />
              <CardItem>
                <Left>
                  <Body>
                    <Text note>Total Amount</Text>
                  </Body>
                </Left>
                <Right>
                  <Button iconLeft transparent>
                    <AwesomeIcon name='inr' style={[styles.commonStyles, styles.amountTextIcon]}/>
                    <Text style={styles.amountText}>10000</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>

          </View>
        </Content>
        </ScrollView>
        {/* <FooterCustom navigate={navigate} routeName={routeName} /> */}
      </Container>


  );
}
}

const styles = StyleSheet.create({
  title: {
    marginLeft: -80,
    color: colorWhite,
    fontSize: spaceExtraBig
  },
  colorWhite: {
    color: colorWhite
  },
  header: {
    backgroundColor: colorPrimary
  },
  cardContainer: {
    margin: spaceSmall
  },
  commonStyles: {
    fontSize: spaceMedium + spaceBig
  },
  successIndicatorIcon: {
    color: colorPrimary
  },
  successIndicatorText: {
    color: colorPrimary
  },
  warningIndicatorIcon: {
    color: colorWarning
  },
  warningIndicatorText: {
    color: colorWarning
  },
  errorIndicatorIcon: {
    color: colorError
  },
  errorIndicatorText: {
    color: colorError
  },
  amountText: {
    color: colorPitchBlack,
    fontSize: spaceExtraBig
  },
  transactionInfoText: {
    fontSize: spaceMedium
  },
  amountTextIcon: {
    color: colorPitchBlack,
    fontSize: spaceExtraBig,
    lineHeight: spaceMedium + spaceBig
  }
});
