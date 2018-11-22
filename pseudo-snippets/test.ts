// EDIT MODEL
case ${1:Entity}ActionTypes.SetEditModel:
const editingModel = action.payload.editModel;
return {
  ...state,
  editModel: { ...editingModel }
};
case ${1:Entity}ActionTypes.UnsetEditModel:
return { ...state, editModel: undefined };
// CREATE MODEL
case ${1:Entity}ActionTypes.SetCreateModel:
const creatingModel = action.payload.createModel;
return {
  ...state,
  editModel: { ...creatingModel }
};
case ${1:Entity}ActionTypes.UnsetCreateModel:
return { ...state, createModel: undefined };