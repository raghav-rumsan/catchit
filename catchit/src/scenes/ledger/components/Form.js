import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Text, Layout } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";

import FiscalYear from "./FiscalYear";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import AccountName from "./AccountName";
import LedgerCollapsibleTable from "./LedgerCollapsibleTable";
import { selectTableData, selectLoading } from "../selectors";
import * as mapDispatchToProps from "../actions";

const styles = StyleSheet.create({
  submitButton: {
    marginVertical: 24,
  },
  text: {
    margin: 4,
    textAlign: "center",
  },

  head: { height: 40, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 28 },
  dataWrapper: { marginTop: -1 },
});

const Form = (props) => {
  const state = {
    tableHead: ["Head1", "Head2", "Head3"],
    tableData: [
      ["1", "2", "3"],
      ["a", "b", "c"],
      ["1", "2", "3"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["a", "b", "c"],
      ["1", "2", "3"],
      ["a", "b", "c"],
      ["1", "2", "3"],
    ],
  };
  const [searched, setSearched] = useState(false);
  const [searchData, setSearchData] = useState("");

  const handleSubmit = async () => {
    try {
      const searchedData = await props.getAccountLedgerList({
        page_number: 1,
        no_of_items: props.pagination_properties.no_of_items,
      });
      setSearched(true);
      setSearchData(searchedData);
    } catch (err) {
      console.error(err);
      setSearched(false);
      setSearchData("");
    }
  };

  const handleDownload = async () => {
    try {
      console.log("downloading assets as excel");
      // await props.getAccountLedgerList();
      // setSearched(true);
    } catch (err) {
      console.error(err);
      // setSearched(false);
    }
  };

  return (
    <>
      <View>
        <FiscalYear />
        <StartDate />
        <EndDate />
        <AccountName />
        <Button style={styles.submitButton} onPress={handleSubmit}>
          SEARCH
        </Button>
      </View>
      {searched ? (
        <>
          <Text style={styles.text} status="info">
            {searchData}
          </Text>
          <LedgerCollapsibleTable title="Opening" data={props.openingData} />
          {/* <LedgerCollapsibleTable title="Opening" data={props.openingData} />
          <LedgerTable title="Data" data={props.data} />
          <LedgerCollapsibleTable title="Closing" data={props.closingData} /> */}
          {/* <ScrollView horizontal={true}>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1}}>
                <Row
                  data={state.tableHead}
                  flexArr={[1, 1, 1]}
                  style={styles.head}
                  textStyle={styles.text}
                />
                <TableWrapper style={styles.wrapper}>
                  <Rows
                    data={state.tableData}
                    flexArr={[1, 1, 1]}
                    style={styles.row}
                    textStyle={styles.text}
                  />
                </TableWrapper>
              </Table>
            </ScrollView>
          </ScrollView> */}
        </>
      ) : null}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  openingData: selectTableData("opening"),
  closingData: selectTableData("closing"),
  data: selectTableData("data"),
  loading: selectLoading,
  pagination_properties: selectTableData("pagination_properties"),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
