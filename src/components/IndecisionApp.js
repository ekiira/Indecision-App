import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleRemoveAll = () => {
        this.setState(() => ({ options: [] }));
    }
    handleRemove = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick = () => {
            const randomPick = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomPick]
            this.setState(() => ({selectedOption: option}));
    }
    handleModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add item';
        }else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options : prevState.options.concat(option) }));
    }
     render() {
         const subtitle = 'Put your life in the hands of a computer';
         return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options  
                    options={this.state.options}
                    handleRemoveAll = {this.handleRemoveAll}
                    handleRemove = {this.handleRemove}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleModal = {this.handleModal}
                />
            </div>
         )
     }
}

IndecisionApp.defaultProps = {
    options : []
}

export default IndecisionApp;