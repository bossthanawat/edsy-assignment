import { cn } from "@/lib/utils";
import React from "react";

const Paper = ({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("bg-white rounded-2xl p-2 shadow-md", className)}>
      {children}
    </div>
  );
};

export default Paper;
/* Frame 90 */
