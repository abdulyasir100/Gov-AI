import Header from "@components/header";
import Footer from "@components/footer";
import '@styles/globals.css';

export const metadata = {
  title: "Gov-AI",
  description: "Gov-AI",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
