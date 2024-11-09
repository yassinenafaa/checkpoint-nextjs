import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Counter from "./Components/Counter";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <nav
                    style={{
                        width: "100%",
                        backgroundColor: "teal",
                        color: "white",
                        fontSize: "30px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Link className='link-nav' href={"/"}>
                        Home
                    </Link>
                    <Link className='link-nav' href={"/products"}>
                        Products
                    </Link>
                    <Link className='link-nav' href={"/posts"}>
                        Posts
                    </Link>
                </nav>
                {children}
                <Counter />
            </body>
        </html>
    );
}
