/* eslint-disable react-refresh/only-export-components */
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import ProjectRow from "../../components/ui/ProjectRow";

export const exampleProjects = [
  {
    id: 1,
    title: "Example Project",
    subtitle: "Featured Project",
    description:
      "A web app for visualizing personalized Spotify data. View your artists, top tracks, recently played tracks, and detailed audi information about each track. Create and save new playlists o recommended tracks based on your existing playlists and more.",
    image: project1,
    reverse: true,
  },
  {
    id: 2,
    title: "Example Project",
    subtitle: "Featured Project",
    description:"A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: project2,
    reverse: false,
  },
];

export default function ExampleProjectSection() {
  return (
    <section id="example-projects" className="relative min-h-screen w-full bg-[#0b001a] overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20 space-y-32">
        {exampleProjects.map((project) => (
          <ProjectRow key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}