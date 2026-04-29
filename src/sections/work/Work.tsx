/* eslint-disable react-refresh/only-export-components */
import Container from "../../components/layout/Container";
import WorkCard from "../../components/ui/WorkCard";
import cbiImage from "../../assets/cbi.png";
import work2Image from "../../assets/work2.png";
import work3Image from "../../assets/work3.png";
import work4Image from "../../assets/work4.png";

export const workExperiencedata = [
  {
    id: 1,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    image: cbiImage,
  },
  {
    id: 2,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    image: work2Image,
  },
  {
    id: 3,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    image: work3Image,
  },
  {
    id: 4,
    title: "CIB on the Mobile",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    image: work4Image,
  },
];

export default function Work() {
  return (
    <section id="work" className="relative min-h-screen pt-10 w-full bg-[#0b001a]">
      <div className="max-w-7xl mx-auto px-30 items-center mt-10">
        <Container>
          <div className="flex flex-col gap-10">
            <p className="font-normal text-[40px] leading-[1] tracking-[0.02em]">
              Work Experience
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {workExperiencedata.map((item) => (
                <WorkCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
