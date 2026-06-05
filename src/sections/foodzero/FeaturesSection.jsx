import {
  ShieldCheck,
  Leaf,
  Apple,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
    },
    {
      icon: Leaf,
      title: "Seasonal Vegetables",
    },
    {
      icon: Apple,
      title: "Fresh Fruit",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="text-center"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#eef2e7]">
                  <Icon size={36} color="#233000"/>
                </div>

                <h3 className="mt-6 font-serif text-2xl text-[#233000]">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs text-gray-500">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}