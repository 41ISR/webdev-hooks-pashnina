const Input = ({className, ...rest}) => {
    return(
       <input
                            className={`input grow${' ' + className}`}
                            {...rest}
                        />
    )
}
export default Input