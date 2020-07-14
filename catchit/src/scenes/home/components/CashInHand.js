import React, {useEffect} from 'react';
import {Button, Text, ListItem, Layout} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {RefreshIcon} from '../../../assets/icons';
import * as mapDispatchToProps from '../actions';
import {selectCashInHand} from '../selectors';

const CashInHand = props => {
  const {loadHomeCash, cashInHand} = props;
  useEffect(() => {
    loadHomeCash();
  }, [loadHomeCash]);

  const renderItemValue = () => (
    <Layout>
      <Text>Credit: ${cashInHand.credit}</Text>
      <Text>Debit: ${cashInHand.debit}</Text>
    </Layout>
  );

  const handleRefresh = async () => {
    try {
      await props.refreshHomeCash();
      loadHomeCash();
    } catch (err) {}
  };

  const renderRefresh = () => (
    <Button
      size="tiny"
      appearance="ghost"
      onPress={handleRefresh}
      accessoryLeft={RefreshIcon}
    />
  );
  return (
    <ListItem
      title={`Cash in hand`}
      description={cashInHand.as_of || ''}
      accessoryLeft={renderRefresh}
      accessoryRight={renderItemValue}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cashInHand: selectCashInHand,
});

export default connect(mapStateToProps, mapDispatchToProps)(CashInHand);
