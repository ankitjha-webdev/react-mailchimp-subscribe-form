import './App.css';
import Mailchimp from 'react-mailchimp-form'
function App() {
  return (
    <Mailchimp
  action='FORM_URL?u=USER_NAME&amp;id=USER_NAME' 
  
  //Adding multiple fields:
  fields={[
    {
      name: 'EMAIL',
      placeholder: 'Email',
      type: 'email',
      required: true
    }
  ]}
  // Change predetermined language
  messages = {
    {
      sending: "Sending...",
      success: "Thank you for subscribing!",
      error: "An unexpected internal error has occurred.",
      empty: "You must write an e-mail.",
      duplicate: "Too many subscribe attempts for this email address",
      button: "Subscribe!"
    }
  }
  // Add a personalized class
  className='mailchimp'
 
  />
    );
  }


export default App;
