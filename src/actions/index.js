export const selectPerson = (peopleId) => {
  return {
    type: 'SELECTED_PERSON',
    selectId: peopleId,
  };
};

export const noneSelected = () => {
  return {
    type: 'NONE_SELECTED',
  };
};