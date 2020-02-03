import { CreativesActions, CreativesActionType } from './creatives.actions';
import { Creative } from '../models/creative';

export const initialState = {};

export function creativesReducer(
  state = initialState,
  action: CreativesActions
) {
  switch (action.type) {
    case CreativesActionType.GET_CREATIVES: {
      return { ...state };
    }

    case CreativesActionType.GET_CREATIVES_SUCCESS: {
      let msgText = '';
      let bgClass = '';

      if (action.payload.length < 1) {
        msgText = 'No data found';
        bgClass = 'alert-danger';
      } else {
        msgText = 'Loading data';
        bgClass = 'alert-info';
      }

      return {
        ...state,
        creativeList: action.payload,
        message: msgText,
        infoClass: bgClass
      };
    }

    case CreativesActionType.GET_CREATIVES_FAILED: {
      return { ...state };
    }

    case CreativesActionType.GET_CREATIVES_BY_ID: {
      return { ...state };
    }

    case CreativesActionType.GET_CREATIVES_BY_ID_SUCCESS: {
      let msgText = '';
      let bgClass = '';

      if (Object.keys(action.payload).length === 0) {
        msgText = 'No data found';
        bgClass = 'alert-danger';
      } else {
        msgText = 'Loading data';
        bgClass = 'alert-info';
      }

      return {
        ...state,
        creativeList: [action.payload],
        message: msgText,
        infoClass: bgClass
      };
    }

    case CreativesActionType.GET_CREATIVES_BY_ID_FAILED: {
      return { ...state };
    }

    case CreativesActionType.DELETE_CREATIVE: {
      const creatives = state;
      creatives['creativeList'].forEach((creative: Creative, i: number) => {
        if (creative.id === action.payload) {
          creatives['creativeList'].splice(i, 1);
        }
      });

      return {
        ...state,
        message: '',
        infoClass: ''
      };
    }

    case CreativesActionType.DELETE_CREATIVE_SUCCESS: {
      return {
        ...state,
        message: 'Creative deleted',
        infoClass: 'alert-success'
      };
    }

    case CreativesActionType.DELETE_CREATIVE_FAILED: {
      return {
        ...state,
        // FAKE MESSAGE - FOR DEMO
        message: 'Creative deleted',
        infoClass: 'alert-success'
      };
    }

    default: {
      return state;
    }
  }
}
