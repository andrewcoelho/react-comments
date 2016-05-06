import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import DeleteConfirmation from '../../components/DeleteConfirmation';

function setup() {
  const onConfirmDelete = expect.createSpy();
  const onCancelDelete = expect.createSpy();

  const component = shallow(
    <DeleteConfirmation
      onConfirmDelete={onConfirmDelete}
      onCancelDelete={onCancelDelete}
    />
  );

  return {
    component,
    onConfirmDelete,
    onCancelDelete,
    buttons: component.find('button')
  };
}

describe('DeleteConfirmation', () => {
  it('cancel button should call onCancelDelete', () => {
    const { buttons, onCancelDelete } = setup();
    buttons.at(0).simulate('click');
    expect(onCancelDelete).toHaveBeenCalled();
  });

  it('submit button should call onConfirmDelete', () => {
    const { buttons, onConfirmDelete } = setup();
    buttons.at(1).simulate('click');
    expect(onConfirmDelete).toHaveBeenCalled();
  });
});
