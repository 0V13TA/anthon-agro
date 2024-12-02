import "./globals.css";

export const metadata = {
  title: "Omorogbe Avenic",
  description: "We are into printing, contracts and maritime consult",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center justify-around sticky p-3 w-full bg-blue-600 top-0 z-50">
          <div className="relative pt-2">
            <h1 className="text-3xl max-sm:text-sm max-sm:font-semibold max-sm:uppercase">
              Omorogbe Avenic
            </h1>
            <p className="absolute top-0 right-2 text-black font-mono text-sm max-sm:font-thin max-sm:text-xs max-sm:top-auto">
              RC: 7421725
            </p>
          </div>

          <ul className="flex items-center">
            <li className="m-2">
              <a href="#hero">Home</a>
            </li>
            <li className="m-2">
              <a href="#about">About</a>
            </li>
            <li className="m-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {children}

        <footer className="flex bg-blue-600 justify-around items-center">
          <h2 className="text-3xl">Omorogbe Avenic</h2>

          <ul className="flex flex-col">
            <li>
              <h2>Contact</h2>
            </li>
            <li>
              Youtube <span></span>
            </li>
            <li>
              Whatsapp: <span></span>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
