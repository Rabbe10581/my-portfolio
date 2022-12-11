import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = useLoaderData()
    console.log(projects);
    return (
        <div className='bg-slate-200 py-10 my-6'>
            <h2 className='text-3xl font-serif font-semibold text-center'>My Projects</h2>
            <div className='grid gap-4 lg:gap-10 grid-cols-1 lg:grid-cols-3 py-6 mx-2 lg:mx-6'>
                {
                    projects.map(project => <ProjectCard
                        key={project.id}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;