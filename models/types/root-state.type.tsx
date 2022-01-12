import teekStore from '../../redux/store';

const { getState } = teekStore({});

export type RootState = ReturnType<typeof getState>
