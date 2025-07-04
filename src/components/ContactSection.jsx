import { useGSAP } from "@gsap/react";
import { socials } from "../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const ContactSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("h2", { type: "words" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.04,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.04,
      })
      .from("#f-right-leaf", {
        x: "50",
        duration: 1,
        ease: "power1.inOut",
      })
      .from(
        "#f-left-leaf",
        {
          x: "-50",
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <footer id="contact">
      <img
        id="f-right-leaf"
        src="/images/footer-right-leaf.avif"
        alt="footer-right-leaf"
      />
      <img
        id="f-left-leaf"
        src="/images/footer-left-leaf.avif"
        alt="footer-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us</h2>

        <div>
          <h3>Visit our store</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact us</h3>
          <p>(555) 987-6543</p>
          <p>hello@jsmcocktail.com</p>
        </div>

        <div>
          <h3>Open every day</h3>
          <p>Mon-Thu : 11:00am - 12am</p>
          <p>Fri : 11:00am - 2am</p>
          <p>Sat : 9:00am - 2am</p>
          <p>Sun : 9:00am - 1 am</p>
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
