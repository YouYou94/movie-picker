import { PickerContainer, PickerHeader, ExitImage } from './PickerStyled';

type PickerProps = {
  isDisplay: boolean;
  setIsDisplay: any;
};

export const Picker = ({ isDisplay, setIsDisplay }: PickerProps) => {
  const onClickPickerExit = () => setIsDisplay(false);

  return (
    <PickerContainer isDisplay={isDisplay}>
      <PickerHeader>
        <ExitImage onClick={onClickPickerExit} alt="EXIT" />
      </PickerHeader>
    </PickerContainer>
  );
};
