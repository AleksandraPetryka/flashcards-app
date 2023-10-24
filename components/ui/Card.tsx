import React from "react";

function Card({ children, label, className }: { children: React.ReactNode, label: string, className: string }) {
  return (
      <section className={className}>
        <label className="block my-1.5 mx-0 text-zinc-300 text-[0.875rem] md:text-s uppercase font-medium">{label}</label>
          <div className="rounded form-widget flex flex-col gap-5 bg-customDarkNavigation p-4">{children}</div>
        </section>
  )
}

export default Card;