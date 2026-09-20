import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'left' | 'right' | 'scale';
  delay?: 100 | 200 | 300 | 400;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay,
  className = '',
  style,
}) => {
  const variantClassMap = {
    'fade-up': 'scroll-reveal',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    scale: 'scroll-reveal-scale',
  };

  const delayClassMap = {
    100: 'delay-100',
    200: 'delay-200',
    300: 'delay-300',
    400: 'delay-400',
  };

  const combinedClasses = [
    variantClassMap[variant],
    delay ? delayClassMap[delay] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={combinedClasses} style={style}>
      {children}
    </div>
  );
};
