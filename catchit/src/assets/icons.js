import React from "react";
import {
  AntDesign as Icon,
  Entypo,
  FontAwesome,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

const iconStyle = (styles = { style: {} }, Component, name = "") => {
  let newStyle;
  const { style } = styles;
  // let fontColor = "black";
  // if (style && style["tintColor"]) {
  //   fontColor = style["tintColor"];
  //   delete style["tintColor"];
  // }
  newStyle = {
    ...style,
    // color: fontColor,
  };

  return <Component name={name} {...newStyle} />;
};

export const BackIcon = (style) => iconStyle(style, Ionicons, "ios-arrow-back");

export const LayoutIcon = (style) => iconStyle(style, Icon, "layout-outline");

// export const DeleteIcon = (state) => <Icon {...style} name="delete" />;

export const PersonIcon = (style) => iconStyle(style, Icon, "user");

export const MoreVerticalIcon = (style) =>
  iconStyle(style, Entypo, "dots-three-vertical");

export const LogoutIcon = (style) => iconStyle(style, Icon, "logout");

export const InfoIcon = (style) => iconStyle(style, Icon, "infocircle");

export const AlertTriangleIcon = (style) =>
  iconStyle(style, Feather, "alert-triangle");

export const EyeIcon = (style) => iconStyle(style, Icon, "eyeo");

export const EyeOffIcon = (style) => iconStyle(style, Feather, "eye-off`");

export const MenuIcon = (style) => iconStyle(style, Icon, "menuunfold");

export const HomeIcon = (style) => iconStyle(style, Icon, "home");

export const RulesIcon = (style) => iconStyle(style, FontAwesome5, "th-list");

export const NotificationsIcon = (style) => iconStyle(style, Feather, "bell");

export const SuperAdminIcon = (style) =>
  iconStyle(style, FontAwesome5, "user-astronaut");

export const DoneAllIcon = (style) =>
  iconStyle(style, Icon, "done-all-outline");

export const GridIcon = (style) => iconStyle(style, Icon, "grid-outline");

export const SearchIcon = (style) => iconStyle(style, Icon, "search-outline");

export const RefreshIcon = (style) => iconStyle(style, Icon, "refresh1");

export const BountyIcon = (style) => iconStyle(style, FontAwesome, "money");

export const ClockIcon = (style) => iconStyle(style, Icon, "clockcircleo");
