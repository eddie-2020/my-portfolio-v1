import { social } from "../components/shared/SocialLinks";

const Social = () => {
  const { github, twitter, linkedin, email, social_links } = social;

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
      <div className="d-flex flex-column p-4">
        <a className="" href={social_links.gith} target="/blank">
          {github && <img src={github} width={30} alt="github" />}
        </a>
        <a className="m-3" href={social_links.link} target="/blank">
          {linkedin && <img src={linkedin} width={30} alt="linkedin" />}
        </a>
        <Mailto
          email={social_links.em}
          target="/blank"
          subject="Hello & Welcome"
          body="Hello User, how may I be of help?"
        >
          {email && <img src={email} width={30} alt="email" />}
        </Mailto>
        <a className="m-3" href={social_links.twit} target="/blank">
          {twitter && <img src={twitter} width={30} alt="twitter" />}
        </a>
      </div>
    </div>
  );
};

export default Social;
