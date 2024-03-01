import {Skills, SubTitle, Text, Times, Title} from "./Items";

const ContentItems = (props) => {
  const {title, subTitle, times, text, skills} = props;
  return (
    <div className="lg:flex gap-x-3">
      <Times>{times}</Times>
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
