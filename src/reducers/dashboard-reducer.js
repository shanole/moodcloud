import * as c from './../actions/ActionTypes';

const defaultState = {
  selectedKeyword: null,
  selectedEntry: null,
  selectedForm: null,
  modal: false
}

export const dashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case c.CHANGE_SELECTED_KEYWORD:
      return {...state, selectedKeyword: action.keyword, selectedEntry: null, selectedForm: null, modal: true}
    case c.CHANGE_SELECTED_ENTRY:
      return {...state, selectedKeyword: null, selectedEntry: action.entry, selectedForm: null, modal: true}
    case c.CHANGE_SELECTED_FORM:
      return {...state, selectedKeyword: null, selectedEntry: null, selectedForm: action.form, modal: true}
    case c.SHOW_HOME_DASHBOARD:
      return defaultState;
    case c.TOGGLE_EDIT:
      return {...state, selectedForm: action.form, modal: true}
    default:
      return state;
  }
}