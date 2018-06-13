import React, {Component} from 'react';

class SignIn extends Component{
    state = {
        body: ""
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.updateUser(this.state.body)
    }

    handleChange = (ev) => {
        this.setState({ body: ev.target.value })
    }

    render() {
        return (
            <form style = {styles.form} onSubmit = {this.handleSubmit}> 
                <h1 style = {styles.h1}> Sign In: </h1>
                <input type = "text" 
                    style = {styles.input}
                    value={this.state.body}
                    onChange={this.handleChange}>
                </input>
                <button type="submit" style = {styles.button}>submit</button>
            </form>
        )
    }
}

const styles = {
    form: {
        alignItems: 'center',
        textAlign: 'center'
    },
    h1: {
        textAlign: 'center'
    },
    input: {
        flex: 1,
        margin: '0 auto',
        display: 'block',
        fontSize: '1.2rem',
    },
    button: {
        margin: '0 auto',
        fontSize: '1.5rem',
        backgroundColor: '#1A8FE3',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        borderBottomLeftRadius: '0.5rem',
        borderTopLeftRadius: '0.5rem',
        border: '1px solid white',
      }
    
}

export default SignIn