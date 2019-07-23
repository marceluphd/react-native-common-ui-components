import React from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "react-native-common-utils/js/styles";
import { AlterStyles } from "react-native-common-utils";

export default class ToggleButton extends React.Component {
   render() {
      return <TouchableOpacity
         style={new AlterStyles(this.props.style)
            .addProperty("flex", this.props.parent.props.fullWidth, 1)
            .build()}
         onPress={this.props.parent.onPress.bind(this, this.props.index)}
         activeOpacity={styles.activeOpacity}
         disabled={this.props.index == this.props.parent.state.currentIndex}>
         {this.props.children}
      </TouchableOpacity>;
   }
}
