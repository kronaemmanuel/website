import { PageProps } from "$fresh/server.ts";

import { Container } from "../components/Container.tsx";
import Navbar from "../islands/Navbar.tsx";
import { resumeData as resume } from "../data/resume.ts";
import ToggleSwitch from "../components/ToggleSwitch.tsx";
import LevelBadge from "../components/LevelBadge.tsx";
import DownloadResume from "../components/DownloadResume.tsx";

export default function Resume(props: PageProps) {
  return (
    <>
      <DownloadResume />
      <Navbar active="/resume" showLogo={false} />
      <Container>
        <img
          class="w-24 md:w-32 h-24 md:h-32 rounded-full bg-white"
          src={resume.photo}
          alt="krona emmanuel"
          width="500"
          height="500"
        />
        <section class="relative mt-2 sm:mt-8 flex flex-col md:flex-row justify-between">
          <div>
            <h1 class="leading-tight text-gray-900 text-4xl md:text-5xl font-semibold">
              {resume.name}
            </h1>
            <p class="mt-2 md:mt-4 text-xl sm:text-3xl">
              {resume.title}
            </p>
            <div class="my-2 flex items-center space-x-2">
              <ToggleSwitch on={resume.for_hire} />
            </div>
          </div>
          <div class="mt-8 md:mt-0 space-y-2 md:space-y-3">
            <a class="underline" href={`mailto:${resume.contact.email}`}>
              {resume.contact.email}
            </a>
            <p>{resume.contact.city}</p>
            <div class="flex space-x-4">
              {resume.contact.socials.map((social) => (
                <a href={social.link} target="_blank">
                  <img src={social.logo} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section class="mt-16 md:mt-16 md:w-9/12">
          <p>{resume.objective}</p>
        </section>

        <section class="flex flex-col md:flex-row justify-between">
          <div class="mt-16 md:mt-20 md:w-8/12">
            <h2 class="text-3xl font-bold text-gray-900">Work Experience</h2>
            {resume.for_hire && (
              <a
                href="/contact"
                class="cursor-pointer mt-8 border-4 border-dashed rounded-lg w-full flex justify-center"
              >
                <div class="flex items-center py-8">
                  <img src="/icons/plus-sign.png" width="30" height="30" />
                  <p class="text-lg font-bold ml-2">Hire Me</p>
                </div>
              </a>
            )}
            {resume.work_experiences.map((experience) => (
              <div class="mt-8 flex flex-col space-y-3">
                <p class="order-2 md:order-none text-gray-600">
                  {experience.from} - {experience.to}
                </p>
                <h3 class="order-3 md:order-none font-bold">
                  {experience.position}
                </h3>
                <div class="order-1 md:order-none flex items-center space-x-3">
                  <div class="flex space-x-3">
                    {experience.logos.map((logo) => <img src={logo} />)}
                  </div>
                  <h3 class="font-bold">{experience.company}</h3>
                  <p class="hidden md:inline-block">
                    {experience.company_description}
                  </p>
                </div>
                <p class="order-4 md:order-none md:w-3/4">
                  {experience.job_description}
                </p>
                <div class="order-5 md:order-none flex flex-col">
                  {experience.links.map((link) => (
                    <a href={link.link} class="underline text-blue-600">
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div class="mt-16 md:mt-20 md:w-3/12 flex flex-col md:items-center">
            <h2 class="text-3xl font-bold text-gray-900">
              Education
            </h2>
            {resume.education.map((period) => (
              <div class="mt-8 flex flex-col space-y-3 md:text-center">
                <LevelBadge level={period.level} />
                <h3 class="font-bold">{period.title}</h3>
                <div>
                  <p>
                    {period.institution}
                    <br />
                    {period.from} - {period.to}
                  </p>
                  <p>{period.program}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section class="mt-16">
          <h2 class="text-3xl font-bold text-gray-900">Skills</h2>
          <div class="md:grid md:grid-cols-4 gap-20">
            {resume.skills.map((skill) => (
              <div class="mt-8">
                <h3 class="font-bold">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
