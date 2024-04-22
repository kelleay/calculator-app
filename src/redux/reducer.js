
import { current } from "@reduxjs/toolkit";
import ACTIONS from "./action";


const evaluate = state => {
    let {lastOperand, currentOperand, operation} = state;
    let last = parseFloat(lastOperand);
    let curr = parseFloat(currentOperand);

    
    let res = "";

    switch(operation){
        case "+" : 
            res = last + curr;
            break;
        case "-" :
            res = last - curr;
            break;
        case "*" :
            res = last * curr;
            break;
        case "÷" :
            res = last / curr;
            break;
    }
    return res.toString();
}

const reducer = (
    state = {
        currentOperand: "",
        lastOperand: "",
        operation: "",
        overwrite: false,
    },
    action
) => {
    switch(action.type) {
        
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite){
                return{
                    ...state,
                    currentOperand: action.digit,
                    overwrite: false,
                }
            }
            if(state.currentOperand === "0" && action.digit === "0" ) return state;
            if(state.currentOperand === "0" && action.digit !== '.') 
                return {
                    ...state, //原本的属性
                    currentOperand: action.digit, //进行修改
                }
            if(action.digit === '.' && state.currentOperand.includes('.')) return state;
            if(action.digit === '.' && state.currentOperand === ""){
                return {
                    ...state,
                    currentOperand: "0.",
                }
            }
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,

            }
        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite){
                return {
                    ...state,
                    currentOperand: "",
                    overwrite: false,
                }
            }
            if(state.currentOperand === "")
                return state;
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }
        case ACTIONS.CHOOSE_OPERATION:
            if(state.lastOperand === "" && state.currentOperand === "") return;
            if(state.lastOperand === "")
                return {
                    ...state,
                    lastOperand: state.currentOperand,
                    operation: action.operation,
                    currentOperand: "",
                }
            if(state.currentOperand === "")
                return {
                    ...state,
                    operation: action.operation,
                }
            return {
                ...state,
                lastOperand: evaluate(state),
                operation: action.operation,
                currentOperand: "",
            }
        case ACTIONS.CLEAR:
            return {
                lastOperand: "",
                operation: "",
                currentOperand: "",
            }
        case ACTIONS.EVALUATE:
            if(state.currentOperand === "" || state.lastOperand === ""
        || state.operation === "") return;
            return {
                ...state,
                currentOperand: evaluate(state),
                lastOperand: "",
                operation: "",
                overwrite: true,
            }
        default:
            return state;
    }
}

export default reducer;