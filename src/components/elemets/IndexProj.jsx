import {Skills, SubTitle, Text, Image, Title} from "./Items";

const ContentItems = (props) => {
  const {title, subTitle, src, text, skills} = props;
  return (
    <div className="lg:flex gap-x-3">
      <Image src={src} />
      <section className="flex flex-col gap-y-2 pt-2 lg:pt-0">
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Text>{text}</Text>
        <Skills>{skills}</Skills>
      </section>
    </div>
  );
};

export default ContentItems;
