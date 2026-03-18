type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="space-y-4 py-10 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h1>

      {description && (
        <p className="max-w-2xl text-lg text-neutral-600">{description}</p>
      )}
    </div>
  );
}
