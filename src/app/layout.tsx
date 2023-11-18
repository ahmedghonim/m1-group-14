import "@styles/globals.css";
export default async function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <link
          rel="icon"
          href="./favicon.ico"
          type="image/png"
          sizes="114x114"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
