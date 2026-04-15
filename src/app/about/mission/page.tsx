import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "The guiding principles of Paryavaran Sanrakshan Gatividhi.",
};

export default function MissionPage() {
  return (
    <PagePlaceholder
      title="Our Mission"
      description="The principles that guide our work for the environment."
    />
  );
}
