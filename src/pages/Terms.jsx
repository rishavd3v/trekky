import { Link } from "react-router-dom"

export default function Terms(){
    return(
        <div className="mx-30 space-y-6">
            <section className="text-4xl font-bold mt-26 mb-2">
                Terms and Conditions
            </section>

            <section className="mb-8"><Body>Please read these Terms and Conditions carefully before booking a tour with TrekMate. These terms outline the rules and responsibilities for both the tour operator (TrekMate) and the traveller. By booking a tour with us, you agree to these terms.</Body></section>

            <section className="space-y-1">
                <Title>Refund Policy</Title>
                <Body>Refunds are issued only in accordance with the cancellation terms outlined below. By booking a tour with TrekMate, you acknowledge and agree to the following refund conditions.</Body>
            </section>

            <section className="space-y-3">
                <Title>Cancellation by You</Title>
                <Body>To cancel your trek, the lead participant on the booking must notify us in writing. The following cancellation charges will apply:</Body>
                <ul className="list-disc pl-8">
                    <li><Body>From the booking date up to 30 days before the departure date: 30% of the package cost will be charged.</Body></li>
                    <li><Body>30 to 15 days before the departure date: 50% of the package cost will be charged.</Body></li>
                    <li><Body>15 to 7 days before the departure date: 75% of the package cost will be charged.</Body></li>
                    <li><Body>Within 5 days of the departure date: 100% of the package cost will be charged (no refund).</Body></li>
                </ul>
            </section>

            <section className="space-y-3">
                <Title>Option to Postpone</Title>
                <Body>As an alternative to cancellation, you may choose to postpone your trek to the following year. In such cases, your full advance payment will be converted into a voucher (valid for 1 year only), which can be redeemed against a future (valid for 1 year) booking with TrekMate.</Body>
            </section>

            <section className="space-y-3">
                <Title>Refund Processing</Title>
                <Body>All eligible refunds will be processed within <span className="font-bold text-secondary">7–10 business days</span> from the date your cancellation is confirmed. Refunds will be credited to the original payment method used at the time of booking.</Body>
                <Body>Please note: Any non-refundable charges, such as taxes or service fees, will be excluded from the refunded amount.</Body>
                <Body><span className="font-bold text-secondary">Note:</span> A standard cancellation processing fee of INR 1,500 will apply to any cancellations initiated by the participant, regardless of the cancellation window.</Body>
                <Body>Alternatively, you have the option to postpone your trek to the following year, in which case the full amount of your advance payment will be converted into a voucher, redeemable against future bookings.</Body>
            </section>

            <section className="space-y-3">
                <Title>Circumstances Beyond Our Control</Title>
                <ul className="list-disc pl-8">
                    <li><Body>We cannot compensate, reimburse expenses, or cover losses if we have to change or cancel your tour due to circumstances beyond our control.</Body></li>
                    <li><Body>Such circumstances may include war, airport closures, epidemics, natural disasters, terrorist activities, civil unrest, industrial disputes, and bad weather.</Body></li>
                </ul>
            </section>

            <section className="space-y-3">
                <Title>Damage and Liability:</Title>
                <ul className="list-disc pl-8">
                    <li><Body>You and your traveling party are jointly and individually liable for any damage to the accommodation, furniture, or other materials.</Body></li>
                    <li><Body>You must report any breakages, defects, or damage immediately.</Body></li>
                    <li><Body>If your behavior or that of your party causes a diversion, you are responsible for all related costs.</Body></li>
                </ul>
            </section>

            <section className="space-y-3">
                <Title>Note</Title>
                <Body>We kindly ask you to refrain from consuming alcohol during your Trek with <span className="font-semibold text-blue-700"><Link to={"/"}>TrekMate</Link></span>. It is against our policy and the decision of the operation manager and trek leader is final in matters concerning the safety and well-being of all participants. Please note that if alcohol consumption is identified, your trek may be terminated, and unused services cannot be refunded. Thank you for your cooperation in maintaining a safe and enjoyable experience for everyone.</Body>
            </section>

            <section><Body>We want you to have an enjoyable and safe experience with TrekMate. These terms and conditions help ensure a smooth and pleasant journey for all travellers. If you have any questions or concerns, please contact us before booking your tour. Thank you for choosing TrekMate for your travel adventure.</Body></section>



        </div>
    )
}
function Title({children}){
    return(
        <p className="font-bold text-lg">{children}</p>
    )
}

function Body({children}){
    return(
        <p className="text-sm text-accent">{children}</p>
    )
}