import React from 'react';

const ProjectCard = ({ project }) => {
    const { projects_name, technologies, features, image } = project;
    return (
        <div className="card card-compact w-fit bg-base-200 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{projects_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;