export function ProgressBar({
  value,
  max = 100,
  label,
  className = "",
}: {
  value: number;
  max?: number;
  label: string;
  className?: string;
}) {
  const safeMax = Math.max(1, max);
  const safeValue = Math.min(Math.max(value, 0), safeMax);

  return (
    <div
      className={`h-[6px] w-full overflow-hidden rounded-full bg-neutral-100 ${className}`}
      role="progressbar"
      aria-label={label}
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={safeMax}
    >
      <span
        className="block h-full rounded-[inherit] bg-primary-500"
        style={{ width: `${(safeValue / safeMax) * 100}%` }}
      />
    </div>
  );
}
