"use client";

export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm"
      aria-label="Loading"
      role="status"
    >
      
      <svg viewBox="25 25 50 50" className="loader-container">
        <circle cx="50" cy="50" r="20" className="loader-circle"></circle>
      </svg>
    </div>
  );
}
