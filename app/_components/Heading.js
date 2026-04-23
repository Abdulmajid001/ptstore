import React from "react";

function Heading({ label }) {
  return (
    <header className="text-center mb-16">
      <h2 className={`text-3xl md:text-6xl font-bold mb-6`}>{label}</h2>
    </header>
  );
}

export default Heading;
