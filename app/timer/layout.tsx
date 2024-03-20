import "./index.css";
export const metadata = {
  title: "Happy Anniverary😘",
  description: "I wrote a lot of my feelings here.",
  icons: {
    icon: "pink-heart.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
