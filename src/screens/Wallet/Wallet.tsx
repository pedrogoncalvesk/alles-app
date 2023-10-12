import * as React from 'react';
import { View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import numeral from 'numeral';
import {
  Layout,
  StyleService,
  Avatar,
  Button,
  Icon,
  useStyleSheet,
} from '@ui-kitten/components';

import { TOTAL } from '../Home';
import Images from 'assets/images';
import { WalletStackParamList } from 'navigation/navigation-types';
import { useLayout } from 'hooks';
import { reset } from "navigation/RootNavigation";
import {
  Container,
  Content,
  Text,
  NavigationAction,
  HStack,
  VStack,
  Asterisk,
} from 'components';

const Home = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const { navigate } = useNavigation<NavigationProp<WalletStackParamList>>();
  const { top, bottom } = useLayout();

  return (
    <Container style={styles.container} useSafeArea={false}>
      <HStack level="5" style={[{ paddingTop: top + 8 }]} itemsCenter>
        <HStack style={[{ paddingLeft: 20 }]}>
          <Avatar source={Images.avatar.avatar04} />
        </HStack>
        <HStack style={[{ paddingRight: 20 }]}>
          <Text category="h7" status="white">
            Alle's Benefícios
          </Text>
        </HStack>
        <NavigationAction icon="bell" status="basic" />
      </HStack>
      <VStack level="5" ph={16} pb={24} style={styles.topNavigation}>
        <HStack justify="center" itemsCenter>
          <Text status="white" category="h5">
            Saldo total
          </Text>
        </HStack>
        <HStack itemsCenter justify="center">
          <Text category="h2" status="white">
            {formatDefault(Number(TOTAL).toFixed(2))}
          </Text>
        </HStack>
      </VStack>
      <Content contentContainerStyle={styles.content}>
        <Layout level="10" style={styles.card}>
          <View style={styles.cardHeader}>
            <HStack itemsCenter>
              <Text category="h7">Cartão Virtual Multibenefícios</Text>
              <Icon pack="assets" name="eye_closed" style={{ marginLeft: 12 }} />
            </HStack>
            <Text category="h7" uppercase>
              Visa
            </Text>
          </View>
          <View style={styles.cardNumber}>
            <Asterisk number={4} />
            <Asterisk number={4} />
            <Asterisk number={4} />
            <Text category="h4">1313</Text>
          </View>
          <HStack style={styles.cardBottom} justify="flex-end">
            <Text category="h6">Katia Ferreira</Text>
            <Text category="h7" uppercase>12/23</Text>
            <View>
              <Asterisk number={3} />
              <Text category="label" uppercase>CVV</Text>
            </View>
          </HStack>
        </Layout>
        <HStack itemsCenter mh={24} mt={32}>
          <Text category="h4">Últimas Transações</Text>
          <Icon pack="assets" name="caret_right" style={styles.caret} />
        </HStack>
        {DATA_TRANSACTION.map((item, i) => {
          return (
            <VStack key={i} mt={24} mh={24}>
              <HStack>
                <Layout style={styles.stag} level="3">
                  <Icon pack="assets" name={item.icon} style={styles.icon} />
                </Layout>
                <VStack style={{flex: 1}}>
                  <HStack mb={10}>
                    <Text category="s2">{item.title}</Text>
                    <Text category="h7" status="danger">
                      {item.amount}
                    </Text>
                  </HStack>
                  <Text category="c1" status="platinum">
                    {item.date}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          );
        })}
      </Content>
      <Layout style={[{ paddingBottom: bottom, paddingHorizontal: 16, paddingTop: 12 }]}>
        <Button
          status="info"
          children={
            <>
              <Icon pack="assets" name="plus" style={{ paddingLeft: 10, marginRight: 12 }} />
              <Text category="h6" status="white" uppercase>Adicionar saldo livre</Text>
            </>
          }
          onPress={() => navigate("AddBalance")}
        />
      </Layout>
      <Layout style={[styles.bottom, { paddingBottom: bottom + 8 }]} level="2">
        <NavigationAction icon="house" status="primary" onPress={() => reset("Home")} />
        <NavigationAction icon="card_holder" status="primary" onPress={() => {}} />
        <NavigationAction icon="user" status="primary" onPress={() => {}} />
      </Layout>
    </Container>
  );
});

export default Home;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    paddingTop: 24,
  },
  content: {
    paddingBottom: 20,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  bottom: {
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  card: {
    height: 200,
    borderRadius: 12,
    marginTop: 24,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  cardNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 34,
    paddingHorizontal: 18,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },
  caret: {
    width: 16,
    height: 16,
    tintColor: 'text-basic-color',
  },
  stag: {
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

const DATA_TRANSACTION = [
  {
    title: 'Spotify',
    icon: 'entertainment',
    date: '20/07/2021 06:00',
    amount: '-R$ 39.90',
  },
  {
    title: 'Uber',
    icon: 'pin_map',
    date: '19/07/2021 18:40',
    amount: '-R$ 87.20',
  },
  {
    title: 'Mercearia da Ana',
    icon: 'dot_nine',
    date: '15/07/2021 20:15',
    amount: '-R$ 151.80',
  },
  {
    title: 'Pizzaria do João',
    icon: 'pizza',
    date: '13/07/2023 20:37',
    amount: '-R$ 96,00',
  },
  {
    title: 'Shopping',
    icon: 'coffe',
    date: '12/07/2023 09:55',
    amount: '-R$ 24.23',
  },
  {
    title: 'Uber',
    icon: 'pin_map',
    date: '12/07/2021 08:15',
    amount: '-R$ 122.23',
  },
];

const formatDefault = (amount: string, currency = "R$") => {
  let textResult = `${currency} `;
  try {
    if (isNaN(parseFloat(amount))) {
      textResult += numeral(parseFloat(amount.replace(",", ""))).format("0,0.00");
    } else {
      textResult += numeral(parseFloat(amount)).format("0,0.00");
    }
  } catch (e) {
    console.log(e);
  }
  return textResult;
};
