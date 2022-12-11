import React from 'react';

const ProjectCard = ({ project }) => {
    const { projects_name, technologies, features, image } = project;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-10">
            <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{projects_name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <p className='lg:text-2xl'>{technologies}</p>
            </div>
        </div>
    );
};

export default ProjectCard;