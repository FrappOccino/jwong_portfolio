    'use client';

    import React, { useState } from 'react';
    import MagicButton from './ui/MagicButton';
    import { FaLocationArrow } from 'react-icons/fa';
    import { contactInfo, socialMedia } from '@/data';

    const Footer = () => {
    const [tooltipText, setTooltipText] = useState('');

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
        setTooltipText('Copied');
        setTimeout(() => setTooltipText(''), 2000); // Reset after 2 seconds
        });
    };

    return (
        <footer className="relative w-full pt-20 pb-10" id="contact">
        <div className="absolute inset-0">
            <img 
            src="/footer-grid.svg" 
            alt="grid"
            className="w-full h-full object-cover opacity-50"
            />
        </div>

        <div className="relative z-10 flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
            Ready to take <span className="text-purple">your</span> digital
            presence to the next level?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
            </p>
            <a href="mailto:wongjeffreyg@gmail.com">
            <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
            />
            </a>
        </div>

        <div className="relative z-10 flex mt-16 md:flex-row flex-col justify-center items-center">
            <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
                <a
                key={info.id}
                href={info.url} // URL for each social media link
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
                className="w-20 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                <img src={info.img} alt="icons" width={20} height={20} />
                </a>
            ))}

            {contactInfo.map((info) => (
                <div
                key={info.id}
                className="relative w-20 h-10 md:w-full cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                onClick={() => handleCopy(info.num)}
                >
                <img src={info.img} alt="icons" width={20} height={20} />
                <span className="ml-2 hidden md:block">{info.num}</span>
                {info.num && (
                    <span
                    className={`absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded-lg opacity-75 ${
                        tooltipText ? 'block' : 'hidden'
                    }`}
                    >
                    {tooltipText || 'Copy'}
                    </span>
                )}
                </div>
            ))}
            </div>
        </div>
        
        <p className="mt-5 flex z-10 md:text-base text-sm md:font-normal font-light justify-center">
            Copyright © 2024 Jeffrey Wong
        </p>
        </footer>
    );
    };

    export default Footer;
