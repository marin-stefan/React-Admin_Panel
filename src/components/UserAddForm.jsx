import React from "react";

class UserAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      isGoldClient: false,
    };
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updateIsGoldClient(event) {
    this.setState({ isGoldClient: event.target.checked });
  }

  formReset() {
    document.querySelector(".add-form").reset();
  }

  render() {
    const { name, email, isGoldClient } = this.state;

    return (
      <form
        className="add-form px-2 py-2 form-group  "
        onSubmit={(event) =>
          this.props.submitAddForm(event, name, email, isGoldClient)
        }
      >
        <h2 className="px-3 py-3">Add Users:</h2>
        <label htmlFor="name"><h6>Name:</h6></label>
        <input
          type="text"
          className="form-control"
          name="name"
          required="required"
          onChange={(event) => this.updateName(event)}
        />
        <label htmlFor="email">
          <h6> Email:</h6>
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          required="required"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          onChange={(event) => this.updateEmail(event)}
        />
        <input
          id="check-box"
          className="form-check-input my-2"
          type="checkbox"
          name="is-gold-client"
          value="true"
          onChange={(event) => this.updateIsGoldClient(event)}
        />
        <label className="my-2" htmlFor="is-gold-client">
          <h6>&nbsp; GOLD User ? </h6>
        </label>
        <br />
        <input
          type="submit"
          value="Add User"
          className="rounded-3 btn btn-outline-primary btn-sm btn-shadow border-warning"
        />
      </form>
    );
  }
}

export default UserAddForm;
