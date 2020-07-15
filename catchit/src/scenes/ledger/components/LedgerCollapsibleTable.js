import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";
import { Icon } from "@ui-kitten/components";
import { connect } from "react-redux";
import * as mapDispatchToProps from "../actions";
// import CurrencyView from "../../../components/CurrencyView";
const CurrencyView = ({ value }) => <>{value}</>;

const styles = StyleSheet.create({});

const LedgerCollapsibleTable = (props) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const toggleDataVisible = () => setDetailVisible((prevValue) => !prevValue);
  const {
    data: { summary, data },
  } = props;
  return (
    <Table>
      {summary.data.length ? (
        <Row
          data={[
            "S.N.",
            ...summary.header.map((head) => {
              let value = summary.data[0][head.key];
              return `${head.alias}: ${value || ""}`;
            }),
          ]}
          flexArr={Array(summary.header.length + 1).fill(1)}
        />
      ) : null}

      {/* {detailVisible ? (
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>S.N.</Table.HeaderCell>
            {data.header.map(head => (
              <Table.HeaderCell
                key={`table-data-head${props.title}-${head.key}`}>
                {head.alias}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
      ) : null}
      {detailVisible ? (
        <Table.Body>
          {data.data.map((each, index) => (
            <Table.Row key={`table-data-body-${props.title}-${index}`}>
              <Table.Cell>{index + 1}</Table.Cell>
              {data.header.map(head => {
                let value = each[head.key];
                if (!!head.is_account && head.key === 'account_name') {
                  return (
                    <Table.Cell
                      key={`table-data-row-${props.title}-${index}-${head.key}`}
                      selectable
                      onClick={() => {
                        props.setAccountInput(each[head.key]);
                        props.setPrimaryValue({
                          key: 'account_id',
                          value: [each.account_id],
                        });
                        props.setPrimaryValue({
                          key: 'type',
                          value: each.type,
                        });
                        props.setPrimaryValue({
                          key: 'account_name',
                          value: each[head.key],
                        });
                        props.getAccountLedgerList();
                      }}
                      style={{cursor: 'pointer'}}>
                      <span style={{color: 'blue'}}>{value || ''}</span>
                    </Table.Cell>
                  );
                }
                if (head.is_currency) {
                  return (
                    <Table.Cell
                      key={`table-data-row-${props.title}-${index}-${head.key}`}>
                      <CurrencyView value={value} />
                    </Table.Cell>
                  );
                }
                return (
                  <Table.Cell
                    key={`table-data-row-${props.title}-${index}-${head.key}`}>
                    {value || ''}
                  </Table.Cell>
                );
              })}
            </Table.Row>
          ))}
        </Table.Body>
      ) : null} */}
    </Table>
  );
};

const mapStateToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LedgerCollapsibleTable);
