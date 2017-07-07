import {GET_MODAL_FORM, OPEN_FULL_CASE, OPEN_SLIDER, SEND_MESSAGE_SUCCESS, SEND_CLIENTS_SUCCESS, NULL_CALLBACKS, SCROLLER_OPACITY, CONTRACT_FORM, WORK_PLAN_FORM, RECOMENDATION_FORM} from '../actions/index';

const initialState = {
    modalShow: false,
    outSide: false,
    caseUri: [],
    fullCase: false,
    slider: false,
    responseJson: null,
    clientsResp: null,
    typeRate: '',
    styles: '',
    auditType: '',
    contract: false,
    workPlan: false,
    guarantees: false
};

const salesReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case RECOMENDATION_FORM:
            return Object.assign({}, state, {guarantees: action.show});
            break;
        case WORK_PLAN_FORM:
            return Object.assign({}, state, {workPlan: action.show});
            break;
        case CONTRACT_FORM:
            return Object.assign({}, state, {contract: action.show});
            break;
        case GET_MODAL_FORM:
            return Object.assign({}, state, {modalShow: action.show});
            break;
        case OPEN_FULL_CASE:
            return Object.assign({}, state, {caseUri: action.payload, fullCase: action.show});
            break;
        case OPEN_SLIDER:
            return Object.assign({}, state, {caseUri: action.payload, slider: action.show});
            break;
        case SCROLLER_OPACITY:
            return Object.assign({}, state, {styles: action.payload});
            break;
        case SEND_MESSAGE_SUCCESS:
            return Object.assign({}, state, {responseJson: action.payload});
            break;
        case SEND_CLIENTS_SUCCESS:
            return Object.assign({}, state, {clientsResp: action.payload});
            break;
        case NULL_CALLBACKS:
            return Object.assign({}, state, {responseJson: action.valOne, clientsResp: action.valTwo});
            break;
        default: return state;
    }
};

export default salesReducer;