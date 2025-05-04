interface BadgeProps {
    title: string;
    variant: "success" | "secondary" | "warning" | "info" | "danger";
}

export function Badge({ title, variant }: BadgeProps) {
    const variantClasses: Record<typeof variant, string> = {
        success: "bg-green-100 text-green-800",
        secondary: "bg-gray-300 text-gray-700",
        warning: "bg-yellow-100 text-yellow-800",
        info: "bg-blue-100 text-blue-800",
        danger: "bg-red-100 text-red-800",
    };

    return (
        <span
            className={`text-xs flex justify-center items-center px-3 py-1 rounded-full font-medium ${variantClasses[variant]}`}
        >
      {title}
    </span>
    );
}
