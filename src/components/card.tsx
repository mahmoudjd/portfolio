interface CardProps {
    children: React.ReactNode
    className?: string
}
export function Card({children, className}: CardProps) {
    return (
        <div
            className={"bg-gray-800 p-4 rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/40 transition-transform duration-300 hover:-translate-y-1 "+ className}>
            {children}
        </div>)
}