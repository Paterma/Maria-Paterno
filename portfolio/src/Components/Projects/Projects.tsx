import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Astro from "./ProjectImages/Astro.png";
import Monitor from "./ProjectImages/Monitor.png";
import Dashboard from "./ProjectImages/Dashboard.png";
import Schedule from "./ProjectImages/Schedule.png";
import Travel from "./ProjectImages/Travel.png";
import AcmeVid from "./ProjectImages/AcmeVid.mp4";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Astro UXDS",
      description: `Astro is the only publicly available, open-source Design System for
      applications used in the operation, monitoring and maintenance of
      space vehicles.`,
      technologies:
        "React, Angular, Vue, TypeScript, JavaScript, Stencil, Playwright",
      src: Astro,
      href: "https://www.astrouxds.com/",
    },
    {
      title: "TT&C Monitor",
      description: `TT&C Monitor is a demo app used to showcase not only a real-world Space Monitor application, but is also built with the Astro library.`,
      technologies: "React, TypeScript, Astro UXDS, ApexCharts",
      src: Monitor,
      href: "https://www.astrouxds.com/",
    },
    {
      title: "GRM Dashbaord",
      description: `Astro is the only publicly available, open-source Design System for
      applications used in the operation, monitoring and maintenance of
      space vehicles. The Astro design system belongs to Rocket Communications, and I
      worked on Astro as a front-end developer.`,
      technologies: "React, TypeScript, Astro UXDS, ApexCharts",
      src: Dashboard,
      href: "https://www.astrouxds.com/",
    },
    {
      title: "GRM Schedule",
      description: `Astro is the only publicly available, open-source Design System for
      applications used in the operation, monitoring and maintenance of
      space vehicles. The Astro design system belongs to Rocket Communications, and I
      worked on Astro as a front-end developer.`,
      technologies: "React, TypeScript, Astro UXDS, ApexCharts",
      src: Schedule,
      href: "https://www.astrouxds.com/",
    },
    {
      title: "The Traveler's K9",
      description: `Astro is the only publicly available, open-source Design System for
      applications used in the operation, monitoring and maintenance of
      space vehicles. The Astro design system belongs to Rocket Communications, and I
      worked on Astro as a front-end developer.`,
      technologies: "React, JavaScript",
      src: Travel,
      href: "https://www.thetravelersk9.com/",
    },
  ] as any;

  return (
    <div className="carousel-wrapper">
      {/* <h1>Professional and Personal Projects</h1> */}
      <Carousel
        infiniteLoop={true}
        stopOnHover={true}
        dynamicHeight={true}
        interval={6000}
        autoPlay
      >
        <div>
          <video autoPlay loop width={"1250px"}>
            <source src={AcmeVid} type="video/mp4" />
          </video>

          <p className="legend">
            <h2>
              <a
                href="https://dev.space-acme.com/"
                target="_blank"
                rel="noreferrer"
              >
                Space ACME
              </a>
            </h2>
            Space ACME is a cross-functional 3D rendered tool for visualizing
            real-world and manipulated orbits of objects around earth. Due to
            the nature of this app, I'm unable to provide source code. ACME
            belongs to Rocket Communications, and I am a front-end developer on
            this project.
            <p>
              React, Redux, THREE.js, R3F, Astro UXDS, TypeScript, Cypress,
              Python, MUI,
            </p>
          </p>
        </div>

        {projects.map(
          ({ title, description, technologies, src, href }: any) => (
            <div>
              <a href={href} target="_blank" rel="noreferrer">
                <img src={src} alt="Projects" />
              </a>
              <div className="legend">
                <a id="projPhoto" href={href} target="_blank" rel="noreferrer">
                  <h2>{title}</h2>
                </a>
                <p>{description}</p>
                <p>{technologies}</p>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Projects;
