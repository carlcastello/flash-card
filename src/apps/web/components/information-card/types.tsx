export interface IOwnProps {
  id: string,
  title: string,
  subtitle?: string,
  description: string,
  onEdit: (id: string) => void,
  onDelete: (id: string) => void,
  classes: {
    inlineTypography: string,
    paperContainer: string,
    iconButton: string,
    iconButtonContainer: string,
  }

}