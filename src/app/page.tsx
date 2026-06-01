import HomeContent from "@/components/HomeContent";
import { events } from "@/lib/content";

export default function Home() {
  const featuredActivities = events.filter((event) => event.featured);

  return <HomeContent featuredActivities={featuredActivities} />;
}
