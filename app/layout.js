import "./globals.css";

export const metadata = {
  title: "Text Display",
  description: "Enter text and see it displayed instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
