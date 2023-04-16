import { Button, Container, Group } from "@mantine/core";
import { ContactUs } from "../components/ContactUs";
import { FeaturesTitle } from "../components/Features";
import { HeroImageBackground } from "../components/Header";

export default function IndexPage() {
  return (
    <>
    <HeroImageBackground></HeroImageBackground>
    <Container my="md">
    <FeaturesTitle></FeaturesTitle>
    <ContactUs></ContactUs>
    </Container>
    
    </>
  );
}
