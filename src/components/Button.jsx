/* eslint-disable react/prop-types */
export default function Button({text, handle, style, disabledStatus = false}){
    return (
        <>
            <button style={style} onClick={handle} disabled={disabledStatus}>{text}</button>
        </>
    )
}