export interface IOwnProps {
  isOpen: boolean,
  onConfirm?: () => void,
  onIgnore: () => void,
  isLoading?: boolean,

  classes: {
    modalContainer: string,
    modalPaperContainer: string,
    closeButton: string,
  }
}