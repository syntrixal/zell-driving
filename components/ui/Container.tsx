import * as React from "react";

export function Container({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
        className,
      ].join(" ")}
      {...props}
    />
  );
}

