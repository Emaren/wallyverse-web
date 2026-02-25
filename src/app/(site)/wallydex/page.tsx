import { StandardPage } from "@/components/site/StandardPage";
import { WallydexShowcase } from "@/components/site/WallydexShowcase";

export default function WallydexPage() {
  return (
    <StandardPage pageKey="wallydex">
      <WallydexShowcase />
    </StandardPage>
  );
}
