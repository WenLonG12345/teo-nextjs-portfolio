
import ProfileSection from "@/components/new/home/ProfileSection";
import { ISpotifySong } from "@/types/spotify";

async function getSpotifyData(): Promise<ISpotifySong> {
  const res = await fetch("http://localhost:3000/api/spotify");

  if (!res.ok) {
    throw new Error("Failed to fetch spotify data");
  }

  return res.json();
}

async function Home() {
  const spotifyData = await getSpotifyData();

  return (
    <main className="container mx-auto">
      <ProfileSection song={spotifyData} />
    </main>
  );
}

export default Home;
