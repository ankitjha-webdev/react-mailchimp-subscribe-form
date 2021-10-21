import './App.css';
import Mailchimp from 'react-mailchimp-form'
function App() {
  return (
    <Mailchimp
  action='https://cutm.us5.list-manage.com/subscribe/post?u=e749dc1d02fdf85fab11779d4&amp;id=0d25a44211' 
  
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
