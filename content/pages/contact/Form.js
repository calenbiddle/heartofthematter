import React, { Component } from "react"
import { 
  Button, 
  Box,
  Label,
  Input,
  Textarea,
} from '../../../node_modules/@theme-ui/components'

class Form extends Component {
// const Form = () => {
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
      <form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
      <p>
        <label>Email: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
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
