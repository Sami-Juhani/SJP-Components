import { FancyHero } from "../components/FancyHero";
import { TypeWriterOptions } from "../components/FancyHero/TypeWriter";

export function FancyHeroTest() {
  const imgSrc = "./bw-profile.jpg";
  const userDefinedOptions: TypeWriterOptions = {
    typingDelay: 75,
    x: "5%",
    y: "10%",
    startDelay: 2000,
    endDelay: 2000,
  };
  const paragraph = ["I'm a frontend developer", "I'm a backend developer"];

  return <FancyHero imgSrc={imgSrc} paragraph={paragraph} typeWriterOptions={userDefinedOptions} />;
}
