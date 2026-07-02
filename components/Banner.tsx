import React from "react";

interface BannerProps {
  backgroundColor: string;
  children: React.ReactNode;
}

export const Banner = ({ backgroundColor, children }: BannerProps) => {
  return (
    <section className={`${backgroundColor} px-5 py-3 text-center`}>
      <div className="mx-auto flex flex-col items-center gap-8">
        {children}
      </div>
    </section>
  );
};