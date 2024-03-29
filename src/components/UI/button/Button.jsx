import './Button.css'

const Button = ({ children, onClick, ...rest }) => {
	return (
		<button className="button" onClick={onClick} {...rest}>
          {children}
        </button>
	)
}

export default Button