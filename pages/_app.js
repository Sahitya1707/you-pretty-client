import "@/styles/globals.css";
import RootLayout from "@/components/root_layout";

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
