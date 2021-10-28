import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    formReset() { 
        document.getElementById("create-course-form").reset();
      }

    render() {
        const {name, email, isGoldClient} = this.state;
        

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient)}
            >
                <h2>Add Users:</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    required="required"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"  
                    name="email"
                    required="required"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">GOLD Client ?</label>
                <input
                    id="check-box"
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input type="submit" value="Add User"/>
            </form>
        )
    }
}

export default UserAddForm;