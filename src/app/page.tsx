import NavBar from "@/components/NavBar";
import { ISpotifySong } from "@/types/spotify";
import Image from "next/image";

async function getSpotifyData(): Promise<ISpotifySong> {
  const res = await fetch("http://localhost:3000/api/spotify");

  if (!res.ok) {
    throw new Error("Failed to fetch spotify data");
  }

  return res.json();
}

async function Home() {
  const spotifyData = await getSpotifyData();

  console.log("@test", spotifyData);
  
  return (
    <main>
      <div>This is HOME</div>
    </main>
  );
}

export default Home;
