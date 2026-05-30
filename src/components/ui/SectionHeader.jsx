export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <header className={`max-w-3xl mb-16 ${alignClass} ${className}`}>
      <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-display font-bold text-secondary-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-secondary-600 text-balance">{description}</p>
      )}
    </header>
  );
}
