import React, { Component } from "react";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { 
  Button, 
  Label,
  Input,
} from '../../../../node_modules/@theme-ui/components'

export default class MailChimp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: '',
      msg: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value
    const response = await addToMailchimp(email)
    this.setState({
      status: response.result,
      msg: response.msg
    })
  }

  render() {
    const { status, msg } = this.state;
    return (
      <form
        onSubmit={e => this.handleSubmit(e)}
        method="POST"
      >

        <Label htmlFor='email'>Your email</Label>
        <Input
          id='email'
          type='email'
          name='email'
          mb={3}
        />

        {status === "success" 
          ? <p>{msg}</p> 
          : <Button type='submit'>
              Subscribe
            </Button>
        }
        {status === "error" && <p>{msg}</p>}

      </form>
    );
  }

}