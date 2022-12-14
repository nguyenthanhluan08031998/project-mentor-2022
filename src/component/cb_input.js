import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react"
function FancyInput(props, ref) {
    const inputRef = useRef();
    const [tong, setTong] = useState(0)

    const sub = () => {
        setTong(tong => tong - 1)
    }
        useImperativeHandle(ref, () => ({
            sum: () => {
                setTong(tong => tong + 1)
            },

            multi: () => {
                setTong(tong => tong * 2)
            },
            swap:()=>{
                
            }
        }));
    return <div>
            <input src="movie.mp4" ref={inputRef} height={400} width={400} />
            <div>Tong :{tong}</div>
            <button onClick={sub}>sub</button>
        </div>
}
export default forwardRef(FancyInput);