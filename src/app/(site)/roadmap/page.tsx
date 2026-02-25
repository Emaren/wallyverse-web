import { RoadmapTimeline } from "@/components/site/RoadmapTimeline";
import { StandardPage } from "@/components/site/StandardPage";

export default function RoadmapPage() {
  return (
    <StandardPage pageKey="roadmap">
      <RoadmapTimeline />
    </StandardPage>
  );
}
