import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';

const getSampleAction001 = () => ({
    type: ActionTypes.SAMPLE_TYPE_001 as ActionTypes.SAMPLE_TYPE_001,
    data: {
        title: 'New Title',
        subtitle: 'Created by ActionCreator',
        text: 'This text will be overwritten',
    },
});

const getSampleAction002 = () => ({
    type: ActionTypes.SAMPLE_TYPE_002 as ActionTypes.SAMPLE_TYPE_002,
    data: 'RESULT OF YOUT ACTION',
});

export type SampleActions = ReturnType<typeof getSampleAction001 | typeof getSampleAction002>;

export const SampleActionCreators = {
    actionCreator001() {
        AppDispatcher.dispatch(getSampleAction001());
    },
    actionCreator002() {
        AppDispatcher.dispatch(getSampleAction002());
    },
};
