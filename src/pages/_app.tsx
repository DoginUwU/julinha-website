import { AppProps } from "next/app";
import { Provider as NextAuthProvider } from "next-auth/client";
// styles
import "../styles/global.scss";
// components
import { Header } from "../components/header";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default App;
