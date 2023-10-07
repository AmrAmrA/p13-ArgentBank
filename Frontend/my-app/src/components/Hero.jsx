import React from "react";

export default function Hero() {
  const heroContentData = [
    {
      className: "sr-only",
      type: "h2",
      content: "Promoted Content",
    },
    {
      className: "subtitle",
      type: "p",
      content: "No fees.",
    },
    {
      className: "subtitle",
      type: "p",
      content: "No minimum deposit.",
    },
    {
      className: "subtitle",
      type: "p",
      content: "High interest rates.",
    },
    {
      className: "text",
      type: "p",
      content: "Open a savings account with Argent Bank today!",
    },
  ];

  return (
    <div className="hero">
      <section className="hero-content">
        {heroContentData.map((item, index) => {
          const Element = item.type;
          return (
            <Element key={index} className={item.className}>{item.content}</Element>
          );
        })}
      </section>
    </div>
  );
}