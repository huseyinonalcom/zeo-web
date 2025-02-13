import Trailer from "@/components/categories/Trailer";
import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  const categories = [
    {
      id: "1",
      name: "karavan",
      description: "Özel tasarım Karavan",
      component: <Trailer />,
    },
    { id: "2", name: "römork", description: "Kendi Römorkunuzu Tasarlayın" },
    { id: "3", name: "çeki demiri", description: "Her araca çeki demiri" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {categories.map((category) => (
        <div key={category.id} className="">
          {category.component && category.component}
        </div>
      ))}
    </div>
  );
}
