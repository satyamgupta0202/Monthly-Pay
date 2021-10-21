import './month.css'

const Month = (props) => {
    return (
        <div className="month">
            <label className="name">{props.month}</label>
            ₹{props.children}
        </div>
    )
}

export default Month
