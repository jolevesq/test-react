import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';

import { ActionTypes, Actions } from '../constants/AppConstants';

type TopState = {
    title: string;
    subtitle: string;
    text: string;
    count: number;
};

class TopStore extends ReduceStore<TopState, Actions> {
    getInitialState() {
        return {
            title: 'Title',
            subtitle: 'Subtitle',
            text: 'Text',
            count: 0,
        };
    }

    reduce(state: TopState, action: Actions) {
        switch (action.type) {
            case ActionTypes.TOP_TYPE_001: {
                const newCount = state.count + 1;
                return {
                    title: action.data.title,
                    subtitle: action.data.subtitle,
                    text: `Action Creator was called ${newCount} times.`,
                    count: newCount,
                };
            }
            case ActionTypes.TOP_TYPE_002:
                return state;
            default:
                return state;
        }
    }
}

export default new TopStore(AppDispatcher);
