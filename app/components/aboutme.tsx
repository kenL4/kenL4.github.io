import Image from 'next/image';
import { forwardRef } from 'react';

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <section
            ref={ref}
            className="h-screen flex items-center justify-center bg-gray-100 text-black text-3xl font-bold"
            >
            🚀 Welcome to the next section!
        </section>
        );
    }
);

export default AboutMe;