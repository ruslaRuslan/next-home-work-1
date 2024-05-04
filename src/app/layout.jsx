export const metadata = {
  title: "Users",
  description: "Bu esas seyfedi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div>HEADER</div>
        {children}
        FOOTER
        </body>
    </html>
  );
}
