import Image from 'next/image';

import ParthaFullPose from '/public/images/partha2.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
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
            I&apos;m Partha Borah, a passionate third-year Computer Science student at Jorhat Engineering College, and an aspiring full stack developer with a strong foundation in backend engineering and a growing curiosity for AI and machine learning.
          </Typography>
          <Typography>
            I love turning ideas into scalable digital solutions. From building full-stack applications using technologies like React.js, Node.js, MongoDB, and Tailwind CSS, to diving into machine learning projects and AI integrations, I enjoy the challenge of solving real-world problems with code. Whether it&apos;s crafting REST APIs or experimenting with LLMs and vector search, I&apos;m constantly learning and evolving.
          </Typography>
          <Typography>
            When I&apos;m not coding, I enjoy solving DSA problems, participating in coding competitions, and staying up-to-date with emerging tech. You might also find me exploring GitHub projects or catching up on indie developer stories.
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
