const Contact = () => {
  // Replace these with your actual handles and number
  const whatsappNumber = "2347062634275"; 
  const facebookUsername = "yourprofile";
  const telegramUsername = "Goody121"; 

  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const facebookLink = `https://www.facebook.com/profile.php?id=61552584287688`;
  const telegramLink = `https://t.me/${telegramUsername}`;

  return (
    <div className="text-card contact-container">
      <h1>Let's Connect</h1>
      <p>Choose your preferred platform to reach out and say hello!</p>
      
      <div className="button-group">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn btn-whatsapp"
        >
          Chat on WhatsApp
        </a>

        <a 
          href={facebookLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn btn-facebook"
        >
          Connect on Facebook
        </a>

        <a 
          href={telegramLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-btn btn-telegram"
        >
          Message on Telegram
        </a>
      </div>
    </div>
  );
};

export default Contact;
