import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SkillCard from './SkillCard';
// import skills from '.skills.json' assert {type: 'json'};

const Skills = () => {
    const skills = useLoaderData()
    // console.log(skills);


    return (
        <div className="hero bg-slate-200 py-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <p className='text-orange-500 font-semibold font-serif'>My Skills</p>
                    <h1 className="lg:text-5xl font-bold">Why Hire me?</h1>
                    <p className="py-6">I have completed my graduation from Daffodil International University with B.Sc in
                        Computer Science and Engineering (CSE). I have worked with HTML, Vanilla CSS,
                        Bootstrap, Tailwind CSS, Javascript, React JS, Node JS, MongoDB Database, and Express
                        JS..</p>
                    <button className="btn btn-primary">Contact Me</button>
                </div>
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 lg:w-1/2">
                    {
                        skills?.map(skill => <SkillCard
                            key={skill.id}
                            skill={skill}>
                        </SkillCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;