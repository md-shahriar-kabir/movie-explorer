import React from 'react';

export default function BrandLogo({ size = 'default' }) {
  const isLarge = size === 'large';

  return (
    <div className={`brand-logo-container ${isLarge ? 'logo-large' : ''}`}>
      <div className="brand-logo-icon">
        <svg
          width={isLarge ? 38 : 32}
          height={isLarge ? 38 : 32}
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Rounded Container with Gradient */}
          <rect
            x="2"
            y="2"
            width="32"
            height="32"
            rx="9"
            fill="url(#logoGradient)"
          />
          
          {/* Film Clapper Stripes on top */}
          <path d="M7 6L11 12H7L3 6H7Z" fill="white" fillOpacity="0.9" />
          <path d="M14 6L18 12H14L10 6H14Z" fill="white" fillOpacity="0.9" />
          <path d="M21 6L25 12H21L17 6H21Z" fill="white" fillOpacity="0.9" />
          <path d="M28 6L32 12H28L24 6H28Z" fill="white" fillOpacity="0.9" />

          {/* Divider line */}
          <line x1="2" y1="12" x2="34" y2="12" stroke="#0b0f19" strokeWidth="1.5" />

          {/* Center Play Button Circle */}
          <circle cx="18" cy="23" r="7" fill="#070a11" fillOpacity="0.85" />
          <polygon points="16,19 22,23 16,27" fill="#f59e0b" />

          <defs>
            <linearGradient
              id="logoGradient"
              x1="2"
              y1="2"
              x2="34"
              y2="34"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f59e0b" />
              <stop offset="0.5" stopColor="#ea580c" />
              <stop offset="1" stopColor="#e11d48" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="brand-logo-text">
        <span className="brand-name-primary">MOVIE</span>
        <span className="brand-name-badge">EXPLORER</span>
      </div>
    </div>
  );
}
