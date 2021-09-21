import * as c from './ActionTypes';

export const showForm = (form) => ({
  type: c.CHANGE_SELECTED_FORM,
  form
});

export const showEntry = (entry) => ({
  type: c.CHANGE_SELECTED_ENTRY,
  entry
});

export const showKeyword = (keyword) => ({
  type: c.CHANGE_SELECTED_KEYWORD,
  keyword
});

export const showDashboard = () => ({ type: c.SHOW_HOME_DASHBOARD });