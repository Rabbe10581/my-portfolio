import React from 'react';

const SkillCard = ({ skill }) => {
    const { name, image } = skill;
    return (
        <div className="card w-32 h-44 bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default SkillCard;