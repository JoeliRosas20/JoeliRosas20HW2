import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
       this.state = {
           linkName:" ",
           url:" "
       }
    }

    handleChange = (event) => {
        if(event.target.id === "link"){
            this.setState({linkName: event.target.value});
        }
        else{
            this.setState({url: event.target.value});
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        let newFavLink = {linkName: this.state.linkName, url:this.state.url};
        this.props.addNew(newFavLink);
        this.setState({linkName: ''})
        this.setState({url: ''})
    }

    render() {
        return(
            <form>
                <label for = "link">Link Name: </label>
                    <input 
                    type = "text" 
                    id = "link" 
                    onChange = {(event) => this.handleChange(event)}
                    value = {this.state.linkName}
                    />
                <label>URL:</label>
                    <input 
                    type = "text" 
                    id = "url" 
                    onChange = {(event) => this.handleChange(event)}
                    value = {this.state.url}
                    />
                <button type = "submit" onClick = {this.onFormSubmit}>
                    Submit
                </button>
            </form>
        )
    }
}

export default Form;
