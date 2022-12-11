import React from 'react';

const ProjectCard = ({ project }) => {
    const { projects_name, technologies, features, image } = project;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:mx-10">
            <figure className='lg:w-1/2'><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{projects_name}</h2>
                <ol className='lg:text-1xl'>
                    <li>1. Three roles can participate. Admin, Buyer & Seller.</li>
                    <li>2. Admin can see all buyers, and sellers can handle them.</li>
                    <li>3. Buyers can buy and see orders, and sellers can upload and see products.</li>
                </ol>
                <p className='lg:text-2xl'>{technologies}</p>
            </div>
        </div>
    );
};

export default ProjectCard;