import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUpperPopup } from "../store/reducers/general"

export function UpperPopup() {
    const dispatch = useDispatch()
    const { upperPopup } = useSelector((storeState) => storeState.general)

    useEffect(() => {
        if (upperPopup) reset()
    }, [upperPopup])

    const reset = () => {
        setTimeout(() => { dispatch(setUpperPopup('')) }, 4000)
    }

    if (!upperPopup) return <></>

    return <section className='upper-popup'>
        {upperPopup === 'copied' && <p>הועתק</p>}
    </section>
}