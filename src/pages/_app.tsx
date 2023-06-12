import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "~/Components/Navbar";
import Footer from "~/Components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
      <Footer />
    </div>
  );
};

export default api.withTRPC(MyApp);
