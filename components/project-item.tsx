import Image from "next/image";
import React, { useEffect } from "react";

const ProjectItem = ({ project }: any) => {
  useEffect(() => {
    // console.log("...ProjectItem... : ", tags);
  }, []);
  const title = project.properties.name.title[0].plain_text;
  const github = project.properties.GitHub.url;
  const description = project.properties.Description.rich_text[0].plain_text;
  const imgSrc = project.cover.file?.url;
  const type = project.properties.Type.multi_select[0].name;
  const tags = project.properties.Tags.multi_select;
  const moreUrl = project.public_url;
  // console.log("...moreUrl... : ", moreUrl);

  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden sm:pr-2 relative sm:h-[22rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-0 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[22rem]">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="text-xs px-2 py-1 mr-2 sm:mt-auto rounded-md hover:scale-110 bg-pink-200 dark:bg-pink-600 w-20">
            {type}
          </div>
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag: any) => (
              <div
                className="bg-black/[0.7] px-3 py-1 text-[0.2rem] uppercase tracking-tight hover:scale-110 text-white rounded-full dark:text-white/70"
                key={tag.id}
              >
                {tag.name}
              </div>
            ))}
          </div>
          {/* <div>github</div> */}
        </div>
        <Image
          src={imgSrc}
          alt="Project Image"
          quality={95}
          width={500}
          height={500}
          className="absolute hidden sm:block top-8 -right-20 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            
            group-even:right-[initial] group-even:-left-20"
        />
      </section>
    </div>
  );
};

export default ProjectItem;
