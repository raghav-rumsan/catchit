import React from 'react';
import {Button, Text, ListItem} from '@ui-kitten/components';
import {RefreshIcon} from '../../../assets/icons';

const StockValue = () => {
  const renderItemValue = props => <Text>$3000</Text>;

  const renderRefresh = props => (
    <Button size="tiny" appearance="ghost" accessoryLeft={RefreshIcon} />
  );
  return (
    <ListItem
      title={`Stock Value`}
      description={`2020 -2021`}
      accessoryLeft={renderRefresh}
      accessoryRight={renderItemValue}
    />
  );
};

export default StockValue;
