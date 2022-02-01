import Link from "next/link";

export default function Custom404() {
    return (
        <div className="container">
            <h1 className="main-title">404 Not Found</h1>
            Its seems like this page has been pwned! (⚆ _ ⚆){"\n\n"}
            eyBzdGF0dXM6ICdQd25lZCcgfQo={"\n"}
            <Link href="/">Home Page</Link>
        </div>
    );
}
