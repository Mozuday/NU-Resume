import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}

        {/* Monetag */}
        <Script id="monetag" strategy="afterInteractive">
          {`
            (function(s){
              s.dataset.zone='11131993';
              s.src='https://nap5k.com/tag.min.js';
            })(
              [document.documentElement, document.body]
                .filter(Boolean)
                .pop()
                .appendChild(document.createElement('script'))
            );
          `}
        </Script>

        {/* Razorpay */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
