import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

        {/* Razorpay */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />

        {/* Adsterra popunder */}
        <Script
          src="https://pl29711191.effectivecpmnetwork.com/c1/97/d1/c197d125088c0a54790f03fcef24135f.js"
          strategy="afterInteractive"
        />

        {/* Adsterra Social Bar */}
        <Script
          src="https://pl29711192.effectivecpmnetwork.com/6e/33/d6/6e33d6731772e9dba803696d5691acd9.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}