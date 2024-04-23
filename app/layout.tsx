import { Metadata } from "next";
import "./globals.css";
import "@/assets/css/font.css";

export const metadata: Metadata = {
  title: "Kirill Krasnikov | Software Engineer",
  description:
    "sexy man and software engineer with very big dick",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: "https://nothing.com",
    title: "Kirill Krasnikov | Software Engineer",
    description:
      "Backend dev, who writes on Django",
    siteName: "My Website",
    images: [
      {
        url: "/og-image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@dogetred",
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-poppins bg-[#f6f5f4] h-screen overflow-hidden max-md:overflow-y-scroll`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
