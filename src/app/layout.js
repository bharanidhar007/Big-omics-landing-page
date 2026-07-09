import "./globals.css";

export const metadata = {
    title: "BigOmics",
    description: "Omics Intelligence Platform",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}