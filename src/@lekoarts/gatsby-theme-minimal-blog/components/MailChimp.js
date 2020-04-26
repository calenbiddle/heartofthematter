import React, { Component } from "react"
import { navigateTo } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class MailChimp extends Component {
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

      <div id="mc_embed_signup">
        <form 
          action="https://app.us8.list-manage.com/subscribe/post?u=f530d4e34940ff8b991a06b38&amp;id=2254846f7b" 
          method="post" 
          id="mc-embedded-subscribe-form" 
          name="mc-embedded-subscribe-form" 
          class="validate" 
          target="_blank" 
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <label for="mce-EMAIL">Email Address </label>
              <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"></input>
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" ></div>
              <div class="response" id="mce-success-response" ></div>
            </div>  
            <div aria-hidden="true">
              <input type="text" name="b_f530d4e34940ff8b991a06b38_2254846f7b" tabindex="-1" value="hidden"></input>
            </div>
            <div class="clear">
              <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">Submit</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

export default MailChimp
