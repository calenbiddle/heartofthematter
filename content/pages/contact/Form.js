import React, { Component } from "react"
import { navigateTo } from 'gatsby-link'
import { 
  Button, 
  Box,
  Label,
  Input,
  Textarea,
} from '../../../node_modules/@theme-ui/components'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };


  render () {
    return (
      // <form 
      //   name="contact" 
      //   method="POST" 
      //   data-netlify="true" 
      //   data-netlify-recaptcha="true"
      //   action="/">
        
      //     <Label htmlFor='name'>Your name</Label>
      //     <Input
      //       type='text'
      //       name='name'
      //       mb={3}
      //     />

      //     <Label htmlFor='email'>Your email</Label>
      //     <Input
      //       type='email'
      //       name='email'
      //       mb={3}
      //     />

      //     <Label htmlFor='message'>Your message</Label>
      //     <Textarea
      //       name='message'
      //       rows='6'
      //       mb={3}
      //     />

      //     <div data-netlify-recaptcha="true"></div>

      //     <Button
      //       type='submit'
      //       onClick={e => e.preventDefault()}
      //     >
      //       Send
      //     </Button>
      // </form>
      <form 
      name="contact" 
      method="POST" 
      data-netlify-recaptcha="true" 
      data-netlify="true" 
      action="/"
      onSubmit={this.handleSubmit}>
      <p>
        <label>Email: <input type="text" name="name" onChange={this.handleChange} /></label>
      </p>
      <p>
        <label>Message: <textarea name="message" onChange={this.handleChange}></textarea></label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    )
  }
}

export default Form
