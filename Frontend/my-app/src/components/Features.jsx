import IconChat from "../assets/icon-chat.png";
import IconMoney from "../assets/icon-money.png";
import IconSecurity from "../assets/icon-security.png";
export default function Features() {
  const featuresData = [
    {
      className: "feature-icon",
      src: IconChat,
      alt: "Chat Icon",
      title: "You are our #1 priority",
      content:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      className: "feature-icon",
      src: IconMoney,
      alt: "Money Icon",
      title: "More savings means higher rates",
      content:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      className: "feature-icon",
      src: IconSecurity,
      alt: "Security Icon",
      title: "Security you can trust",
      content:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((item, index) => (
        <div className="feature-item" key={index}>
          <img src={item.src} alt={item.alt} className={item.className} />
          <h3 className="feature-item-title">{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </section>
  );
}