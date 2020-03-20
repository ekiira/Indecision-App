
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {
            options: props.options
        };

    }
    handleRemoveAll () {
        this.setState(() => ({ options: [] }));
    }
    handleRemove (optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handlePick () {
            const randomPick = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomPick]
            alert(option)
    }
    handleAddOption (option) {
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
            </div>
         )
     }
}

IndecisionApp.defaultProps = {
    options : []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should i do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll} >Remove all</button>
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleRemove={props.handleRemove}
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button 
                onClick={(e) => {
                    props.handleRemove(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    )
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption (e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = '';
        const error = this.props.handleAddOption(option);
       
        this.setState(() => ({ error }));
    }
    render () {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption} >
                    <input type='text' name ="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));