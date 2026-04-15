import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Panch Parivartan",
  description: "The five-point transformation model of Paryavaran Sanrakshan.",
};

export default function PanchParivartanPage() {
  return (
    <PagePlaceholder
      title="Panch Parivartan"
      description="The five-point transformation model that shapes our work."
    />
  );
}
