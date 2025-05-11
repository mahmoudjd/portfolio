interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({children, className}: ContainerProps) {
    return <div className={"w-full bg-gradient-to-b from-gray-900 to-black py-16 px-8 " + className}>
        {children}
    </div>
}