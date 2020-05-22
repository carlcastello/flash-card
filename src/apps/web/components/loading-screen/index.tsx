import React, { Component, ReactNode } from "react";

import { withStyles, Box, Typography, LinearProgress } from "@material-ui/core";

import { IOwnProps } from "./types";
import styles from "./styles";


class LoadingScreen extends Component<IOwnProps> {

  render(): ReactNode {
    const {
      children,
      classes: {
        boxContainer,
        boxContent,
        typography,
        linearProgressBar,
      }
    } = this.props;

    return (
      <Box className={boxContainer}>
        <Box className={boxContent}>
          <Typography variant="h5" className={typography}>
            {children}
          </Typography>
          <LinearProgress color="secondary" className={linearProgressBar}/>
        </Box>
      </Box>
    )
  }
}

export default withStyles(styles)(LoadingScreen);

