const variants = {
  primary: 'bg-accent hover:bg-accent-hover text-white',
  secondary: 'border border-accent text-accent hover:bg-accent/10',
};

export default function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
  ...props
}) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2';
  const variantStyles = variants[variant] || variants.primary;

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
