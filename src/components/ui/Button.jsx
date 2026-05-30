export function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  children,
  ...props
}) {
  const styles = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 disabled:bg-primary-400 shadow-lg hover:shadow-xl',
    secondary:
      'bg-white/10 text-white border border-white/30 hover:bg-white/20',
    ghost:
      'bg-secondary-100 text-secondary-700 hover:bg-secondary-200',
    text: 'text-primary-600 hover:text-primary-700',
  };

  const sizes = {
    md: 'px-6 py-4',
    sm: 'px-5 py-3',
    lg: 'px-8 py-4',
    full: 'w-full px-8 py-4',
  };

  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${
        styles[variant] ?? styles.primary
      } ${sizes[size] ?? sizes.md} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
