import { Container, Divider } from "@chakra-ui/react";
import ProfileSection from "../components/section/ProfileSection";
import TechStackSection from "../components/section/TechStackSection";
import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import Meta from "../components/Meta";
import { SideProjectSection } from "../components/section/SideProjectSection";

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
      <ProfileSection song={data} />
      <Divider my={10} />
      <TechStackSection />
      <Divider my={10} />
      <SideProjectSection />
    </Container>
  );
}
