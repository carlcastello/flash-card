import React, { Component, ReactNode} from "react";
import { Box, withStyles } from "@material-ui/core";

import styles from "./styles";
import { IOwnProps } from "./types";

export class ReviewPage extends Component<IOwnProps> {
  render(): ReactNode {
    return (
      <Box></Box>
    )
  }
}

export default withStyles(styles)(ReviewPage);