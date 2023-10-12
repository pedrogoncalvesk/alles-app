import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import numeral from 'numeral';
import {
  StyleService,
  Button,
  TopNavigation,
  Icon,
  useStyleSheet,
} from '@ui-kitten/components';

import { formatDefault } from 'utils/formatValue';
import {
  Container,
  Content,
  Text,
  NavigationAction,
  HStack,
  VStack,
  InputSelect,
} from 'components';

const AddBalance = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const { goBack } = useNavigation();

  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={<NavigationAction status="primary" />}
        title="Adicionar saldo"
      />
      <Content contentContainerStyle={styles.content}>
        <VStack level="12" padding={16} border={16}>
          <HStack justify="flex-start" mb={16}>
            <Text
              status="white"
              category="callout"
              marginRight={8}>
              Novo saldo
            </Text>
          </HStack>
          <Text category="h4" status="white">
            {formatDefault(Number(100).toFixed(2))}
          </Text>
        </VStack>
        <InputSelect title="Categoria" value={"Saldo Livre"} onPress={() => {}} />
        <InputSelect
          title="Data"
          value="Hoje, 12 Set 2023"
          onPress={() => {}}
        />
      </Content>
      <Button
        children={<><Text category="h5" uppercase status="white">Pagar com PIX</Text></>}
        style={[styles.button]}
        accessoryRight={<Icon pack="assets" name="plus" />}
        onPress={goBack}
      />
    </Container>
  );
});

export default AddBalance;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
  },
  box: {
    padding: 16,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
  },
  input: {
    color: 'transparent',
    paddingLeft: 14,
    fontSize: 24,
  },
  shape: {
    height: 101.6,
    marginTop: 32,
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 8,
  },
  dash: {
    height: 89,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 12,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
