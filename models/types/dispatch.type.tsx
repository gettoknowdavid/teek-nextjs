import teekStore from '../../redux/store';

const { dispatch } = teekStore({});

export type Dispatch = typeof dispatch;
