import Image from 'next/image';

import ParthaFullPose from '/public/images/pb.jpeg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50 lg:h-screen" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={ParthaFullPose}
              alt="Fullpose of Sagar"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Curious about me? Here you have it:
          </Typography>
          <Typography>
            I am a fourth-year Computer Science student at Jorhat Engineering College with a strong focus on backend engineering and software development. I enjoy building production-style projects that involve API design, database modeling, and scalable backend systems. My work is driven by a deep interest in system design, performance optimization, and clean, maintainable code.
          </Typography>
          <Typography>
         I actively learn by building and experimenting with different architectures, integrating third-party services, and understanding how real-world systems behave under scale. Alongside development, I regularly practice data structures and algorithms to strengthen my problem-solving fundamentals. I am motivated by continuous improvement and excited to work on impactful engineering problems as a Software Development Engineer.
          </Typography>
          <Typography>
            Feel free to check out my {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              Github
            </Link>{' '}
             or connect with me on {' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.LINKEDIN}
            >
              LinkedIn
            </Link>
            . If you have an exciting opportunity or just want to chat tech, don&apos;t hesitate to say hi!
          </Typography>
          
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
