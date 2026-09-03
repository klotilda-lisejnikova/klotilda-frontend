/**
 * Klotilda's mark — a simple lichen sprig (lišejníková větvička), nodding to the
 * artist's handle @klotilda.lisejnikova and the lichen in the hero photo.
 * Colour comes from `currentColor`.
 */
export default function LichenMark({
  className,
  strokeWidth = 4.4,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 102 118"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 110 C49 101 49 92 49 82" />
        <path d="M49 82 C41 70 31 63 22 55" />
        <path d="M22 55 C16 46 11 39 9 29" />
        <path d="M22 55 C24 46 28 41 31 33" />
        <path d="M49 82 C57 70 68 63 78 56" />
        <path d="M78 56 C85 47 90 40 93 30" />
        <path d="M78 56 C76 47 73 42 70 34" />
        <path d="M49 82 C50 66 50 54 50 40" />
        <path d="M50 40 C46 33 42 27 40 19" />
        <path d="M50 40 C54 33 58 27 61 19" />
      </g>
      <g fill="currentColor">
        <circle cx="9" cy="27" r="3.6" />
        <circle cx="31" cy="31" r="3.6" />
        <circle cx="40" cy="17" r="3.9" />
        <circle cx="61" cy="17" r="3.9" />
        <circle cx="70" cy="32" r="3.6" />
        <circle cx="93" cy="28" r="3.6" />
      </g>
    </svg>
  );
}
