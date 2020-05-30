export interface IOwnProps {
  onClick: () => void,
  hasHoverEffect?: boolean,
  classes: {
    paperContainer: string,
    boxContainer: string,
  }
}

export interface IOwnState {
  paperElevation: number
}