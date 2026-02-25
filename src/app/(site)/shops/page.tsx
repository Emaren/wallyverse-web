import { ShopBoards } from "@/components/site/ShopBoards";
import { StandardPage } from "@/components/site/StandardPage";

export default function ShopsPage() {
  return (
    <StandardPage pageKey="shops">
      <ShopBoards />
    </StandardPage>
  );
}
