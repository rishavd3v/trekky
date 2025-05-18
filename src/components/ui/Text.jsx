const Heading = ({ children, className, ...props }) => {
  return (
    <h1 className={`text-4xl font-bold ${className}`} {...props}>
      {children}
    </h1>
  )
}

const SubHeading = ({ children, className, ...props }) => {
  return (
    <h1 className={`text-3xl font-bold ${className}`} {...props}>
      {children}
    </h1>
  )
}

const UnderlinedHeading = ({ children, className}) => {
  return (
    <div className="flex flex-col items-center gap-4">
        <div className={`text-5xl font-bold ${className}`}>
            {children}
        </div>
        <div className="h-1 w-20 bg-red-400 rounded"></div>
    </div>
  )
}

export { Heading, SubHeading, UnderlinedHeading };