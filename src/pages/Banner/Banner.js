import React from 'react';
import image from '../../Assets/Banner/my-bg.png'

const Banner = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="hero bg-slate-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} className=" lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="lg:text-5xl font-bold">Hello I am <br />Md Fazla Rabbe Anik</h1>
                    <p className="py-6">As a Web Developer, I have experience of a year with MERN developing and I am highly dedicated and hard-working.</p>
                    <button className='btn btn-primary font-semibold' onClick={onButtonClick}>
                        Download PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;