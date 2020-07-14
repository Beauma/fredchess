import React, { Component } from 'react';

class Entryform extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        var url = 'https://lichess.org/api/board/game/' + this.props.game + '/move/' + this.state.value

        console.log(url)

        const fetched = fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer G7zp9tVJrGSo6I1z'
            }
        })
        fetched.then(response => 
            response.json().then(data => {
              console.log(data)
              window.location.reload(false);
            })
          );

    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <h3>Move: </h3>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Entryform; 