import "./globals.css";

export const metadata = {
  title: "GenPulse",
  description: "Revolutionizing Self-Care with AI and Blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
