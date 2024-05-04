export const metadata = {
  title: "Users",
  description: "Bu esas seyfedi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div style={{ background: "blue", color: "#fff" }}>HEADER</div>
        {children}
        <div style={{ background: "blue", color: "#fff" }}>FOOTER</div>
      </body>
      
    </html>
  );
}
