import React from "react";
import { 
  Button, 
  Label,
  Input,
  Textarea,
} from '../../../node_modules/@theme-ui/components'

const Form = () => {

  return (
    <form 
      action="https://formspree.io/xoqkaqyn"
      method="POST"
      id='hom-contact'
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
        name='_replyto'
        mb={3}
      />

      <Label htmlFor='message'>Your message</Label>
      <Textarea
        name='message'
        rows='6'
        mb={3}
      />

      <Button type="submit" >Send</Button>

    </form>
  )
}

export default Form;