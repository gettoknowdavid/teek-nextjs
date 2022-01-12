import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '../models/types/dispatch.type';
import { RootState } from '../models/types/root-state.type';

export const useTeekDispatch = () => useDispatch<Dispatch>();
export const useTeekSelector: TypedUseSelectorHook<RootState> = useSelector;
