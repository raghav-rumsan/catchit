import React from "react";
import { View } from "react-native";
import {
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from "@ui-kitten/components";
import { BackIcon, MoreVerticalIcon } from "../assets/icons";

export const Toolbar = (props) => {
  const {
    menu,
    backIcon,
    menuIcon,
    onBackPress,
    ...topNavigationProps
  } = props;
  const [menuVisible, setMenuVisible] = React.useState(false);
  const theme = useTheme();
  const onMenuSelect = () => {
    setMenuVisible(false);
  };

  const onMenuActionPress = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = (menuData = () => null) => (
    <OverflowMenu
      visible={menuVisible}
      placement="bottom end"
      onBackdropPress={onMenuActionPress}
      anchor={() => (
        <TopNavigationAction
          icon={menuIcon || MoreVerticalIcon}
          onPress={onMenuActionPress}
        />
      )}
    >
      {menuData(onMenuSelect)}
    </OverflowMenu>
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={backIcon || BackIcon} onPress={onBackPress} />
  );

  return (
    <View style={[{ backgroundColor: theme["color-primary-100"] }]}>
      <TopNavigation
        {...topNavigationProps}
        alignment="center"
        accessoryLeft={onBackPress ? renderBackAction : undefined}
        accessoryRight={menu ? () => renderMenuAction(menu) : undefined}
        appearance="control"
      />
    </View>
  );
};
