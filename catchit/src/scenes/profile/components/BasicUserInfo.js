import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";
import { Text, Button } from "@ui-kitten/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUser } from "../../../redux/global/selectors";

const BasicUserInfo = ({ user, ...props }) => {
  const { userData } = user;

  return (
    <View style={styles.basicUserInfo}>
      <Text category="h1">{userData.full_name}</Text>
      <Text category="h6">{userData.email}</Text>
      <Button appearance="ghost">View full details</Button>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps)(BasicUserInfo);

const styles = StyleSheet.create({
  basicUserInfo: {
    alignItems: "center",
  },
  userAvatar: {
    backgroundColor: "grey",
  },
});
