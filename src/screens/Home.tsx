import * as React from 'react';
import { FlatList } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import numeral from 'numeral';
import {
  Layout,
  StyleService,
  Avatar,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';

import Images from 'assets/images';
import keyExtractor from 'utils/keyExtractor';
import { RootStackParamList } from 'navigation/navigation-types';
import { useLayout } from 'hooks';
import { formatDefault } from 'utils/formatValue';
import {
  Container,
  Content,
  Text,
  NavigationAction,
  HStack,
  VStack,
  ProgressBar,
} from 'components';

const Home = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const { top, bottom } = useLayout();
  const theme = useTheme();

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
        <FlatList
          ListHeaderComponent={
            <HStack mt={8} mb={16}>
              <Text category="h6">Categorias</Text>
            </HStack>
          }
          keyExtractor={keyExtractor}
          data={DATA_TAB}
          renderItem={({ item }) => {
            const percent = (item.balance / item.target) * 100;
            return (
              <VStack level={String(item.color)} border={16} padding={16} mb={8}>
                <HStack mb={10} itemsCenter>
                  <HStack itemsCenter>
                    <Text category="h1">{item.icon}</Text>
                    <Text category="h5" status="white" style={{ paddingLeft: 20 }}>
                      {item.title}
                    </Text>
                  </HStack>
                  <Text category="h6" status="white">
                    {percent.toFixed(2)} %
                  </Text>
                </HStack>
                <ProgressBar
                  progress={percent / 100}
                  progressColor={theme["text-white-color"]}
                  containColor={`${theme["background-basic-color-1"]}20`}
                />
                <HStack itemsCenter mt={8}>
                  <Text status="white" category="h6">
                    {formatDefault(item.balance.toFixed(0))}
                    <Text status="white" opacity={0.8} category="subhead">
                      /{formatDefault(item.target.toFixed(0))}
                    </Text>
                  </Text>
                  <Text category="subhead" status="white">
                    {item.time_left}
                  </Text>
                </HStack>
              </VStack>
            );
          }}
        />
      </Content>
      <Layout style={[styles.bottom, { paddingBottom: bottom + 8 }]} level="2">
        <NavigationAction icon="house" status="primary" onPress={() => {}} />
        <NavigationAction icon="card_holder" status="primary" onPress={() => navigate("Wallet")} />
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
});

const DATA_TAB = [
  {
    icon: "🆓",
    title: "Saldo livre",
    time_left: "",
    balance: 50,
    target: 400,
    color: 12,
    members: [],
  },
  {
    icon: "🥗",
    title: "Vale Refeição",
    time_left: "",
    balance: 500,
    target: 800,
    color: 6,
    members: [],
  },
  {
    icon: "🚇",
    title: "Transporte",
    time_left: "",
    balance: 150,
    target: 400,
    color: 7,
    members: [],
  },
  {
    icon: "🛒",
    title: "Vale Alimentação",
    time_left: "",
    balance: 238.9,
    target: 400,
    color: 8,
    members: [],
  },
  {
    icon: "🎭",
    title: "Lazer",
    time_left: "",
    balance: 138.8,
    target: 500,
    color: 11,
    members: [],
  },
];

export const TOTAL = DATA_TAB.reduce((total, item) => total + (item.target - item.balance), 0);
