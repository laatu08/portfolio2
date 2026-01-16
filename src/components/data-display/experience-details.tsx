import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';
import ImageWrapper from './image-wrapper';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8 md:flex-row md:gap-10">
      
      {/* LEFT: Content */}
      <div className="flex flex-col gap-4 md:w-3/4">
        <Typography variant="subtitle" className="font-semibold text-gray-900">
          {position}
        </Typography>

        <ul className="flex list-disc flex-col gap-2 pl-4">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>

      {/* RIGHT: Timeline + Logo */}
      <div className="flex flex-col items-start gap-3 md:w-1/4 md:items-end">
        <Typography className="text-gray-700 md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)}
          {' — '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
            : 'NA'}
        </Typography>

        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="w-fit h-fit md:w-28"
        />
      </div>

    </Card>
  );
};

export default ExperienceDetails;
