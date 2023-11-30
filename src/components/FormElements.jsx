export const InputField = (props) => {
    return (
        <>
            <div className="mb-3">
                <input type={props.type} className="form-control py-3" name={props.name} id={props.name} placeholder={props.title} required={props.required} />
            </div>
        </>
    )
}

export const SubmitButton = (props) => {
    return (
        <>
            <div className="mb-3">
                <button type={props.type} className="btn btn-primary w-100 py-3" onClick={props.action}>{props.title}</button>
            </div>
        </>
    )
}