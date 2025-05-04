interface CardProps {
    children: React.ReactNode
    className?: string
}
export function Card({children, className}: CardProps) {
    return (
        <div
            className={"bg-gray-800 p-4 rounded-2xl overflow-hidden shadow-2xl "+ className}>
            {children}
        </div>)
}