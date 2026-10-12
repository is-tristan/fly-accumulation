"use client";

// React
import { useState } from "react";

// Next
import Link from "next/link";

// Icons
import { arrowUpRight } from "@/utils/icons";

// Site
import { siteName } from "@/lib/seo";

const web3FormsAccessKey = "e3890bce-b6d0-46ee-9cc8-b6bbe7669947";

export default function ContactForm() {

    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending....");

        const formData = new FormData(event.target);

        try {

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Your message has been sent successfully! We will get back to you as soon as possible.");
                event.target.reset();
            } else {
                setResult(data.message || "Something went wrong!");
            }

        } catch {
            setResult("Something went wrong!");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (

        <form className="form" action="https://api.web3forms.com/submit" method="POST" onSubmit={onSubmit}>

            <input type="hidden" name="access_key" value={web3FormsAccessKey} />

            <input type="hidden" name="subject" value={`New Contact Form Submission from ${siteName}`} />

            <input type="hidden" name="from_name" value={siteName} />

            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />

            <fieldset className="fieldset half" data-name="firstName">

                <legend className="legend">First Name <span className="required">*</span></legend>

                <div className="field">

                    <input type="text" name="firstName" required autoComplete="given-name" placeholder="Enter your first name" aria-required="true" />

                </div>

            </fieldset>

            <fieldset className="fieldset half" data-name="lastName">

                <legend className="legend">Last Name <span className="required">*</span></legend>

                <div className="field">

                    <input type="text" name="lastName" required autoComplete="family-name" placeholder="Enter your last name" aria-required="true" />

                </div>

            </fieldset>

            <fieldset className="fieldset" data-name="email">

                <legend className="legend">Email Address <span className="required">*</span></legend>

                <div className="field">

                    <input type="email" name="email" required autoComplete="email" placeholder="Enter your email address" aria-required="true" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                </div>

            </fieldset>

            <fieldset className="fieldset half" data-name="mobileNumber">

                <legend className="legend">Mobile Number <span className="required">*</span></legend>

                <div className="field">

                    <input type="tel" name="mobileNumber" required autoComplete="tel" placeholder="+44 7XXX XXXXXX" aria-required="true" />

                </div>

            </fieldset>

            <fieldset className="fieldset half" data-name="landlineNumber">

                <legend className="legend">Landline Number</legend>

                <div className="field">

                    <input type="tel" name="landlineNumber" autoComplete="tel" placeholder="+44 XX XXXX XXXX" />

                </div>

            </fieldset>

            <fieldset className="fieldset" data-name="message">

                <legend className="legend">Message <span className="required">*</span></legend>

                <div className="field">

                    <textarea name="message" required autoComplete="off" placeholder="Enter your message..." aria-required="true" />

                </div>

            </fieldset>

            <fieldset className="fieldset consent" data-name="consent">

                <legend className="legend">Consent <span className="required">*</span></legend>

                <div className="field">

                    <input type="checkbox" name="submissionConsent" id="submission-consent" required aria-required="true" />

                    <label htmlFor="submission-consent">

                        By sending this message, you agree to our <Link href="/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="colorPrimary">privacy policy</Link>.

                    </label>

                </div>

            </fieldset>

            <div className="formFooter">

                <button className="btn primary" type="submit" disabled={isSubmitting}>

                    <span>{isSubmitting ? "Sending...." : "Submit Message"}</span>

                    <div className="icon" dangerouslySetInnerHTML={{ __html: arrowUpRight }} />

                </button>

                <div className="resultContainer" role="status" aria-live="polite" style={{ display: result ? "flex" : "none" }}>

                    <span>{result}</span>

                </div>

            </div>

        </form>

    );

}