export function Section({ id, children, className = '', dark = false }) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-6 md:px-20 ${dark ? 'bg-surface' : ''} ${className}`}
    >
      <div className="max-w-content mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, centered = false }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-semibold text-text-primary mb-12 ${centered ? 'text-center' : ''}`}>
      {children}
    </h2>
  );
}
