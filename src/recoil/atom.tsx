import { atom } from 'recoil';

interface PickerTypes {
  id: string | undefined;
  title: any;
  poster_path: any;
}

export const movieState = atom({
  key: 'movieState',
  default: '',
});

export const pickerState = atom<PickerTypes[]>({
  key: 'pickerState',
  default: [],
});
