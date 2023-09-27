export default function Profile({ children, heading }) {
    return (
        <section className="flex flex-col items-start">
            <h1 className="text-2xl font-medium">{heading}</h1>
            <div className="bg-[#303030] p-6 rounded-md w-full mt-4 text-left space-y-4">
                {children}
            </div>
        </section>
    )
}