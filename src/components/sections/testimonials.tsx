import { TESTIMONIALS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const TestimonialsSection = () => {
  return (
    <Container id="achievement" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Achievement" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
Proud moments and milestones I&apos;ve achieved along the way:
        </Typography>
      </div>

      <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {TESTIMONIALS?.map((testimonial, index) => (
          <TestimonialDetails key={index} {...testimonial} />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
