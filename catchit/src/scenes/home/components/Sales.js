import React, {useEffect} from 'react';
import {Button, Text, ListItem, Layout} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {RefreshIcon} from '../../../assets/icons';
import * as mapDispatchToProps from '../actions';
import {selectSales} from '../selectors';

const Sales = props => {
  const {loadHomeSales, sales} = props;
  useEffect(() => {
    loadHomeSales();
  }, [loadHomeSales]);

  const renderItemValue = () => (
    <Layout>
      <Text>Credit: ${sales.credit}</Text>
      <Text>Debit: ${sales.debit}</Text>
    </Layout>
  );

  const handleRefresh = async () => {
    try {
      await props.refreshHomeSales();
      loadHomeSales();
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
      title={`Sales`}
      description={sales.as_of || ''}
      accessoryLeft={renderRefresh}
      accessoryRight={renderItemValue}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  sales: selectSales,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
