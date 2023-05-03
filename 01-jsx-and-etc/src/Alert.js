// props will always be the first argument
// for the component function
export default function Alert(props) {
    return (
        <div className={"alert alert-"+props.type}>
            {props.message}
        </div>
    )
}