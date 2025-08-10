// Import SVG type
import { FC, SVGProps } from 'react';

interface QuestionMarkProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'round' | 'square';
  strokeLinejoin?: 'miter' | 'round' | 'bevel';
}

const QuestionMark: FC<QuestionMarkProps> = ({
  strokeColor = '#000',
  strokeWidth = 2,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  ...props
}) => {
  return (
    <svg
      width="40"
      height="65"
      viewBox="0 0 40 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.1665 14.9418C8.44984 12.3752 10.3748 9.80852 12.9415 8.52518C15.5988 6.98888 18.7011 6.40586 21.7348 6.8726C24.7686 7.33933 27.5522 8.82785 29.6248 11.0918C31.5498 13.6585 32.8332 16.2252 32.8332 19.4335C32.8332 27.7752 19.9998 32.2669 19.9998 32.2669V40.8504M19.9998 57.9337H20.064"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </svg>
  );
};

export default QuestionMark;
