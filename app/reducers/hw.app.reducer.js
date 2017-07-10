import {GET_MODAL_FORM, SEND_MESSAGE_SUCCESS, SEND_CLIENTS_SUCCESS, NULL_CALLBACKS, SCROLLER_OPACITY, PRODUCT_COST_FROM, RECOMENDATION_FORM} from '../actions/index';

const initialState = {
    modalShow: false,
    outSide: false,
    caseUri: [],
    fullCase: false,
    slider: false,
    responseJson: null,
    clientsResp: null,
    product: '',
    styles: '',
    contract: false,
    productCost: false,
    recomendations: false
};

const salesReducer =  ( state = initialState, action) => {
    switch (action.type) {
        case RECOMENDATION_FORM:
            return Object.assign({}, state, {recomendations: action.show});
            break;
        case PRODUCT_COST_FROM:
            return Object.assign({}, state, {productCost: action.show, product: action.product});
            break;
        case GET_MODAL_FORM:
            return Object.assign({}, state, {modalShow: action.show});
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