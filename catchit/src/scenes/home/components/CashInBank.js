import React, {useEffect} from 'react';
import {Button, Text, ListItem, Layout} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {RefreshIcon} from '../../../assets/icons';
import * as mapDispatchToProps from '../actions';
import {selectCashInBank} from '../selectors';

const CashInBank = props => {
  const {loadHomeBankCash, cashInBank} = props;
  useEffect(() => {
    loadHomeBankCash();
  }, [loadHomeBankCash]);

  const renderItemValue = () => (
    <Layout>
      <Text>Credit: ${cashInBank.credit}</Text>
      <Text>Debit: ${cashInBank.debit}</Text>
    </Layout>
  );

  const handleRefresh = async () => {
    try {
      await props.refreshHomeBankCash();
      loadHomeBankCash();
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
      title={`Cash in Bank`}
      description={cashInBank.as_of || ''}
      accessoryLeft={renderRefresh}
      accessoryRight={renderItemValue}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  cashInBank: selectCashInBank,
});

export default connect(mapStateToProps, mapDispatchToProps)(CashInBank);
