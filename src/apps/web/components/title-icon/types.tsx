export interface IOwnProps {
  onClick: () => void,
  classes: {
    titleTypography: string,
    iconButton: string
  }
}

export interface IOwnState {
  isToggled: boolean
}