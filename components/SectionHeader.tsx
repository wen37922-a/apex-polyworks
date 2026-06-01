type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left"
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-graphite sm:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-steel">{text}</p> : null}
    </div>
  );
}
