import { dashboardReducer } from './../../reducers/dashboard-reducer';
import * as c from './../../actions/ActionTypes';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom/cjs/react-dom.development';

describe('dashboardReducer', () => {
  let action;
  
  const defaultState = {
    selectedKeyword: null,
    selectedEntry: null,
    selectedForm: null,
  }

  // this is a hypothetical state for testing purposes
  const seeAllState = {
    selectedKeyword: "keyword here",
    selectedEntry: "entry here",
    selectedForm: "form type here"
  }

  test('should return default state if no action is passed into the reducer', () => {    
    expect(dashboardReducer(defaultState, {type: null})).toEqual({
      selectedKeyword:null,
      selectedEntry: null,
      selectedForm: null
    });
  });

  test('should succesfully change the selected keyword and hide form and keyword components', () => {
    action = {
      type: c.CHANGE_SELECTED_KEYWORD,
      keyword: "keyword"
    }
    expect(dashboardReducer(seeAllState, action)).toEqual({
      selectedKeyword: "keyword",
      selectedEntry: null,
      selectedForm: null
    })
  });

  test('should succesfully change the selected entry and hide the keyword and form components', () => {
    action = {
      type: c.CHANGE_SELECTED_ENTRY,
      entry: "entry"
    }
    expect(dashboardReducer(seeAllState, action)).toEqual({
      selectedKeyword: null,
      selectedEntry: "entry",
      selectedForm: null
    })
  });

  test('should successfully change the selected form and hide the keyword and entry components', () => {
    action = {
      type: c.CHANGE_SELECTED_FORM,
      form: "form"
    }
    expect(dashboardReducer(seeAllState, action)).toEqual({
      selectedKeyword: null,
      selectedEntry: null,
      selectedForm: "form"
    })
  });
});