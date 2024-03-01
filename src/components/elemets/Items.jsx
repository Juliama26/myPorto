const Title = (props) => {
  const {children} = props;
  return <h1 className="font-semibold text-xl">{children}</h1>;
};
const SubTitle = (props) => {
  const {children} = props;
  return <h2 className="text-10%">{children}</h2>;
};
const Times = (props) => {
  const {children} = props;
  return <h2 className="w-full text-15%">{children}</h2>;
};
const Image = (props) => {
  const {src} = props;
  return (
    <img
      src={src}
      alt="image"
      className="w-1/2 h-20 md:h-28 lg:w-full lg:h-20 rounded"
    />
  );
};
const Text = (props) => {
  const {children} = props;
  return <p>{children}</p>;
};
const Skills = (props) => {
  const {children} = props;
  return <p className="text-15%">→ {children}</p>;
};

export {Title, SubTitle, Times, Image, Text, Skills};
