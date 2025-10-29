type CloseIconProps = {
  width?: number
  height?: number
  color?: string
  className?: string
}

export default function CloseIcon({
  width = 24,
  height = 24,
  color = "#ffffff",
  className,
}: CloseIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </svg>
  )
}

