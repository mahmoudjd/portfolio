import React from "react";

interface ListProps {
    children: React.ReactNode;
    grid?: boolean;
    wrap?: boolean;
    className?: string;
    cols?: string;
}

export function List({
                         children,
                         grid = false,
                         wrap = false,
                         className = "",
                         cols = "sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
                     }: ListProps) {
    const baseClass = grid
        ? `grid gap-6 ${cols}`
        : wrap
            ? "flex flex-wrap gap-2 py-4"
            : "flex flex-col space-y-6";

    return (
        <ul className={`${baseClass} ${className}`}>
            {children}
        </ul>
    );
}

export const ListItem = ({children, className}: ListProps) => {
    return (
        <li className={"flex w-full " + className}>
            {children}
        </li>
    )
}
