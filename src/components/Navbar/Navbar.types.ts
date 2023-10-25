export interface NavbarProps {
  isOpen: boolean;
  isChecked: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIsChecked: (isChecked: boolean) => void;
}