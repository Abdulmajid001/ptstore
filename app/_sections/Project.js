import Heading from '../_components/Heading';
import Button from '../_components/Button';
import ProjectSectionLists from '../_components/ProjectSectionLists';

const projectArr = [
  {
    name: "Garden of Hope",
    description: "An Hotel Management Web Application.",
    link: "/projects/gardenofhope",
    tools: ["React", "Next.js", "PostgreSQL", "TailwindCSS"],
    logo: "/goh/goh-logo.png"
  }
];

function Project() {
  return (
    <section className={`flex flex-col max-w-[130rem] m-auto pb-[9.6rem] px-[2rem] sm:px-[6rem] ${projectArr.length <= 2 && 'h-screen' }`}>
      <Heading
        h="My Projects"
        p="Projects & Case Studies"
        hClass="text-brand-dark"
        pClass="text-brand-dark"
      />

      <ProjectSectionLists projectArr={projectArr} />

      <div className={`mx-auto ${projectArr.length <= 2 ? 'mt-auto' :'mt-15'}`}>
        <Button href="/projects" text="View All Projects" className='bg-brand-dark text-brand-light' />
      </div>
    </section>
  )
}

export default Project
