import { CampaignsActions, CampaignsActionType } from './campaigns.actions';
import { Campaign } from '../models/campaign';

export const initialState = {};

export function campaignsReducer(
  state = initialState,
  action: CampaignsActions
) {
  switch (action.type) {
    case CampaignsActionType.GET_CAMPAIGNS: {
      return { ...state };
    }

    case CampaignsActionType.GET_CAMPAIGNS_SUCCESS: {
      let msgText = '';
      let bgClass = '';

      if (action.payload.length < 1) {
        msgText = 'No data found';
        bgClass = 'bg-danger';
      } else {
        msgText = 'Loading data';
        bgClass = 'bg-info';
      }

      return {
        ...state,
        campaignList: action.payload,
        message: msgText,
        infoClass: bgClass
      };
    }

    case CampaignsActionType.GET_CAMPAIGNS_FAILED: {
      return { ...state };
    }

    case CampaignsActionType.DELETE_CAMPAIGN: {
      const campaigns = state;
      campaigns['campaignList'].forEach((campaign: Campaign, i: number) => {
        if (campaign.id === action.payload) {
          campaigns['campaignList'].splice(i, 1);
        }
      });

      return {
        ...state,
        message: '',
        infoClass: ''
      };
    }

    case CampaignsActionType.DELETE_CAMPAIGN_SUCCESS: {
      return {
        ...state,
        message: 'Campaign deleted',
        infoClass: 'bg-warning'
      };
    }

    case CampaignsActionType.DELETE_CAMPAIGN_FAILED: {
      return { ...state };
    }

    default: {
      return state;
    }
  }
}
