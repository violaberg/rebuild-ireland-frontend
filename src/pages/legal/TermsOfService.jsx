import { Helmet } from 'react-helmet-async';

function TermsOfService() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy</title>
                <meta name="description" content="Review the Terms of Service for ReBuild Ireland, outlining the rules and conditions for using our AI-driven platform. Understand your rights and responsibilities when accessing our property renovation in Ireland." />
                <meta name="keywords" content="ReBuild Ireland Terms of Service, platform terms, user agreement, service conditions, property renovation terms, AI platform rules, Ireland property services, user responsibilities, legal terms, service usage guidelines" />
            </Helmet>
            <div className='m-4'>
                <h1 className="text-customGreen font-semibold text-3xl py-3">Terms Of Service</h1>
                <p className="p-3">Read our Terms of Service to understand the rules and guidelines for using ReBuild Ireland,
                    including user responsibilities, privacy practices, and legal information.</p>
                <p className="bg-primarylight text-lg text-start tracking-wide mx-auto max-w-lg rounded-lg overflow-hidden shadow p-3 mt-5">
                    *Terms of Service will be here*</p>
            </div>
        </>
    );
}

export default TermsOfService;
