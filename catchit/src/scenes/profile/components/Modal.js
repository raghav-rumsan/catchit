import React from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Card,
  Layout,
  Modal as UIModal,
  Text,
} from "@ui-kitten/components";

export const Modal = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Layout style={styles.container} level="1">
      <Button onPress={() => setVisible(true)}>TOGGLE MODAL</Button>

      <UIModal visible={visible}>
        <Card disabled={true}>
          <Text>Welcome to UI Kitten 😻</Text>
          <Button onPress={() => setVisible(false)}>DISMISS</Button>
        </Card>
      </UIModal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
});
