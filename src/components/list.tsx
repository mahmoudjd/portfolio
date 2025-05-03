import React from "react";

interface ListProps {
    children: React.ReactNode;
    grid?: boolean;
    className?: string;
    cols?: string;
}

export function List({
                         children,
                         grid = false,
                         className = "",
                         cols = "sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
                     }: ListProps) {
    const baseClass = grid
        ? `grid gap-6 ${cols}`
        : "flex flex-col space-y-6";

    return (
        <div className={`${baseClass} ${className}`}>
            {children}
        </div>
    );
}
