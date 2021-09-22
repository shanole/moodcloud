import * as c from './../../actions/ActionTypes';
import * as actions from './../../actions/index.js'

describe('dashboard reducer actions', () => {
  test('showForm should create a CHANGE_SELECTED_FORM action', () => {
    const form = 'form type';
    expect(actions.showForm(form)).toEqual({
      type: c.CHANGE_SELECTED_FORM,
      form
    })
  });

  test('showEntry should create a CHANGE_SELECTED_ENTRY action', () => {
    const entry = 'entry';
    expect(actions.showEntry(entry)).toEqual({
      type: c.CHANGE_SELECTED_ENTRY,
      entry
    })
  });

  test('showKeyword should create a CHANGE_SELECTED_KEYWORD action', () => {
    const keyword = 'keyword';
    expect(actions.showKeyword(keyword)).toEqual({
      type: c.CHANGE_SELECTED_KEYWORD,
      keyword
    })
  });

  test('showDashboard should create a SHOW_HOME_DASHBOARD action', () => {
    expect(actions.showDashboard()).toEqual({ type: c.SHOW_HOME_DASHBOARD })
  })

  test('toggleEditForm should create a TOGGLE_FORM action', () => {
    expect(actions.toggleEditForm()).toEqual({
      type: c.TOGGLE_EDIT,
      form: 'edit'
    })
  })
})