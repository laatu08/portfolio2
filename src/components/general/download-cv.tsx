'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/Partha Borah latest resume 2.pdf', '_blank')}>
      Download Resume
    </Button>
  );
};

export default DownloadCV;
