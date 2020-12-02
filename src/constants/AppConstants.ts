import { TopActions } from '../actions/TopActionCreators';
import { SampleActions } from '../actions/SampleActionCreators';

export type Actions = TopActions | SampleActions;

export enum ActionTypes {
    TOP_TYPE_001 = 'TOP_TYPE_001',
    TOP_TYPE_002 = 'TOP_TYPE_002',
    SAMPLE_TYPE_001 = 'SAMPLE_TYPE_001',
    SAMPLE_TYPE_002 = 'SAMPLE_TYPE_002',
}
