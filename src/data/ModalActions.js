import ModalActionTypes from './ModalActionTypes';
import ModalDispatcher from './ModalDispatcher';

const Actions = {
  toggleModal() {
    ModalDispatcher.dispatch({
      type: ModalActionTypes.TOGGLE_MODAL,
      value: null
    });
  },

  selectProject(projectName) {
    ModalDispatcher.dispatch({
      type: ModalActionTypes.SELECT_PROJECT,
      value: projectName
    });
  }
}
