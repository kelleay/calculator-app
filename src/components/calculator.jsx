import React, { Component } from 'react';
import Base from './base';
import { connect } from 'react-redux';
import DigitButton from './calculator/digitButton';
import ACTIONS from '../redux/action';
import OperationButton from './calculator/operationButton';

class Calculator extends Component {
    state = { 
        formater: Intl.NumberFormat('en-us'),
     } 
    render() { 
        return (
            <Base>
                <div className='calculator'>
                    <div className='output'>
                        <div className='last-output'>
                            {this.props.lastOperand === ""?"":this.state.formater.format(this.props.lastOperand)} {this.props.operation}
                        </div>
                        <div className='current-output'> 
                            {this.props.currentOperand === ""?"":this.state.formater.format(this.props.currentOperand)}
                        </div>
                    </div>
                    <button className='ac' onClick={this.props.clear}>AC</button>
                    <button onClick={this.props.delete_digit}>DEL</button>
                    <OperationButton operation={"÷"}></OperationButton>
                    <DigitButton digit={"7"} />
                    <DigitButton digit={"8"} />
                    <DigitButton digit={"9"} />
                    <OperationButton operation={"*"}></OperationButton>
                    <DigitButton digit={"4"} />
                    <DigitButton digit={"5"} />
                    <DigitButton digit={"6"} />
                    <OperationButton operation={"-"}></OperationButton>
                    <DigitButton digit={"1"} />
                    <DigitButton digit={"2"} />
                    <DigitButton digit={"3"} />
                    <OperationButton operation={"+"}></OperationButton>
                    <DigitButton digit={"0"} />
                    <DigitButton digit={"."} />
                    <button className='equal' onClick={this.props.evaluate}>=</button>
                </div>
            </Base>
        );
    }
}

const mapStateToProps = (state, props) => { //将下述值弄到this.props
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operation: state.operation,
    }
}


const mapDispatchToProps = {
    delete_digit : () => {
        return {
            type : ACTIONS.DELETE_DIGIT,
        }
    },
    clear : () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },
    evaluate : () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    },
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);