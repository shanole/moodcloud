import { dashboardReducer } from './../../reducers/dashboard-reducer';
import * as c from './../../actions/ActionTypes';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

describe('dashboardReducer', () => {
  let action;
  
  const defaultState = {
    selectedKeyword: null,
    selectedEntry: null,
    selectedForm: null,
    modal: false
  }

  // this is a hypothetical state for testing purposes
  const seeAllState = {
    selectedKeyword: "keyword here",
    selectedEntry: "entry here",
    selectedForm: "form type here",
    modal: true
  }

  const selectedEntryState = {
    selectedKeyword: null,
    selectedEntry: 'entry here',
    selectedForm: null
  }

  test('should return default state if no action is passed into the reducer', () => {    
    expect(dashboardReducer(defaultState, {type: null})).toEqual({
      selectedKeyword:null,
      selectedEntry: null,
      selectedForm: null,
      modal: false
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
      selectedForm: null,
      modal: true
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
      selectedForm: null,
      modal: true
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
      selectedForm: "form",
      modal: true
    })
  });

  test('should successfully reset state to default state with no components showing on dashboard', () => {
    action = {
      type: c.SHOW_HOME_DASHBOARD
    }
    expect(dashboardReducer(seeAllState,action)).toEqual(defaultState);
  })

  test('should change selectedForm to edit form and maintain selectedEntry state', () => {
    action = {
      type: c.TOGGLE_EDIT,
      form: 'edit'
    }
    expect(dashboardReducer(selectedEntryState, action)).toEqual({
      selectedKeyword: null,
      selectedEntry: 'entry here',
      selectedForm: 'edit',
      modal: true
    })
  })
});