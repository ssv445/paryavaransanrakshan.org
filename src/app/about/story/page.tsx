import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Our Story",
  description: "How Paryavaran Sanrakshan Gatividhi began and grew into an all-India movement.",
};

export default function StoryPage() {
  return (
    <PagePlaceholder
      title="Our Story"
      description="The journey from an idea to an all-India movement."
    />
  );
}
