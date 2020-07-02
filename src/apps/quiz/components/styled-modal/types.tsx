export interface IOwnProps {
  isOpen: boolean,
  onConfirm?: () => void,
  onIgnore: () => void,

  classes: {
    modalContainer: string,
    modalPaperContainer: string,
    closeButton: string,
  }
}