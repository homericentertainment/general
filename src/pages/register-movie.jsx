import { useState, useEffect } from "react"
import { server } from '../services/http'
import { useDispatch } from "react-redux"
import { setUpperPopup } from "../store/reducers/general"
const link = 'https://discover.ticketmaster.co.il/event/sol25'

export default function RegisterMovie() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        code: "",
    })

    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        document.title = 'סולטיז | הרשמה לסרט'
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (formData.name.length > 20) return alert("שם מלא חובה וצריך להכיל עד 20 תווים")
            if (formData.phone.length !== 10) return alert("טלפון חייב להכיל 10 ספרות")
            if (formData.code.length > 14 || !formData.code.includes('סולסטארס')) return alert("קוד חייב להיות מורכב מהמילה סולסטארס ומספר אחריו, למשל  סולסטארס1234")
            await server.post('handle-movie/register', formData)
            setSubmitted(true)
        }
        catch (error) {
            alert("שגיאה בשליחת הטופס, אנא נסו שנית מאוחר יותר")
            console.error(error)
        }
    }

    const share = () => {
        const message = `
היי לכולם!
הצטרפו אלי במופע הכי מטורף שהסולטיז עשו עד היום!
לינק לקניית כרטיסים: ${link}
קוד הנחה : ${formData.code}
נתראה שם!`
        navigator.clipboard.writeText(message)
        dispatch(setUpperPopup('copied'))
    }

    if (submitted)
        return <div className="r-wrapper">
            <h1>הטופס נשלח בהצלחה!</h1>
            <p>שלח את הקישור לחברים, פנק אותם בהנחה ואולי תזכה להשתתף בסרט עם כוכבי הסולטיז!</p>
            <button onClick={share}>העתק לינק</button>
        </div>

    return <div className="r-wrapper">
        <h1>הרשמה לסולטיז הסרט</h1>
        <form className="user-form" onSubmit={handleSubmit}>
            <p>נשתמש בפרטים אלו ליצור איתך קשר במידה וזכית.</p>
            <div className="form-field">
                <label htmlFor="name">שם מלא</label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="שם מלא"
                />
            </div>

            <div className="form-field">
                <label htmlFor="phone">טלפון</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="0501234567"
                />
            </div>

            <div className="form-field">
                <label htmlFor="code">קוד על הפלייר</label>
                <input
                    id="code"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                    placeholder="סולסטארס1234"
                />
            </div>

            <p className="policy-link">שליחת המידע מהווה הסכמה <span onClick={() => window.open('https://policies.thesaltiz.com/movie', '_blank')}>לתקנון</span></p>
            <button type="submit" className="submit-btn">
                שליחה
            </button>
        </form>
    </div>
}
