import React from "react";
import { AntDesign as Icon, Entypo, FontAwesome } from "@expo/vector-icons";
// import { Icon } from "@ui-kitten/components";

export const BackIcon = (style) => <Icon {...style} name="back" />;

export const LayoutIcon = (style) => <Icon {...style} name="layout-outline" />;

export const PersonIcon = (style) => <Icon {...style} name="person-outline" />;

export const MoreVerticalIcon = (style) => (
  <Entypo {...style} size={20} name="dots-three-vertical" />
);

export const LogoutIcon = (style) => <Icon {...style} name="logout" />;

export const InfoIcon = (style) => <Icon {...style} name="infocircle" />;

export const AlertTriangleIcon = (style) => (
  <Icon {...style} name="alert-triangle-outline" />
);

export const EyeIcon = (style) => <Icon {...style} name="eye-outline" />;

export const EyeOffIcon = (style) => <Icon {...style} name="eye-off-outline" />;

export const MenuIcon = (style) => (
  <Icon {...style} size={20} name="menuunfold" />
);

export const HomeIcon = (style) => <Icon {...style} size={20} name="home" />;

export const DoneAllIcon = (style) => (
  <Icon {...style} name="done-all-outline" />
);

export const GridIcon = (style) => <Icon {...style} name="grid-outline" />;

export const SearchIcon = (style) => <Icon {...style} name="search-outline" />;

export const RefreshIcon = (style) => <Icon {...style} name="refresh1" />;

export const MoneyIcon = (style) => <FontAwesome name="money" {...style} />;

export const ClockIcon = (style) => (
  <Icon name="clockcircleo" size={24} {...style} />
);
