import { Container, Hero, Nav } from "src/components";

// fetch latest word
const Index: React.FunctionComponent = () => {
  const content = {
    heading: "non2020",
    message: "portfolio!",
  };

  return (
    <Container height="98vh">
      <Nav />
      <Hero content={content} />
    </Container>
  );
};

export default Index;
