import { RootStateType } from '../../models/types/root-state.type';

export const selectGlobal = (state: RootStateType) => state.globalRepo;
