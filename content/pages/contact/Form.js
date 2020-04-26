import React, { Component } from "react";
import { 
  Button, 
  Label,
  Input,
  Textarea,
} from '../../../node_modules/@theme-ui/components'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xoqkaqyn"
        method="POST"
      >
        <Label htmlFor='name'>Your name</Label>
        <Input
          type='text'
          name='name'
          mb={3}
        />

        <Label htmlFor='email'>Your email</Label>
        <Input
          type='email'
          name='email'
          mb={3}
        />

        <Label htmlFor='message'>Your message</Label>
        <Textarea
          name='message'
          rows='6'
          mb={3}
        />

        {status === "SUCCESS" 
          ? <p>Thanks. Your message was sent.</p> 
          : <Button
              type='submit'
            >
              Send
            </Button>
        }
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    console.log('data', data)
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}