import React from "react";
import {
  AntDesign as Icon,
  Entypo,
  FontAwesome,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
// import { Icon } from "@ui-kitten/components";

export const BackIcon = (style) => <Icon {...style} name="back" />;

export const LayoutIcon = (style) => <Icon {...style} name="layout-outline" />;

export const PersonIcon = (style) => <Icon {...style} size={24} name="user" />;

export const MoreVerticalIcon = (style) => (
  <Entypo {...style} size={20} name="dots-three-vertical" />
);

export const LogoutIcon = (style) => <Icon {...style} name="logout" />;

export const InfoIcon = (style) => <Icon {...style} name="infocircle" />;

export const AlertTriangleIcon = (style) => (
  <Feather {...style} name="alert-triangle" />
);

export const EyeIcon = (style) => <Icon {...style} name="eyeo" />;

export const EyeOffIcon = (style) => <Icon {...style} name="eye-off-outline" />;

export const MenuIcon = (style) => (
  <Icon {...style} size={20} name="menuunfold" />
);

export const HomeIcon = (style) => <Icon {...style} size={20} name="home" />;

export const RulesIcon = (style) => (
  <FontAwesome5 name="th-list" size={20} {...style} />
);
export const SuperAdminIcon = (style) => (
  <FontAwesome5 name="user-astronaut" size={20} {...style} />
);

export const DoneAllIcon = (style) => (
  <Icon {...style} name="done-all-outline" />
);

export const GridIcon = (style) => <Icon {...style} name="grid-outline" />;

export const SearchIcon = (style) => <Icon {...style} name="search-outline" />;

export const RefreshIcon = (style) => <Icon {...style} name="refresh1" />;

export const BountyIcon = (style) => <FontAwesome name="money" {...style} />;

export const ClockIcon = (style) => (
  <Icon name="clockcircleo" size={24} {...style} />
);
