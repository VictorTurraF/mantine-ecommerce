import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          colors: {
            purple: [
              "#EEEBF5",
              "#D3CAEA",
              "#B8A8E5",
              "#9C82E7",
              "#7F57F1",
              "#714BDC",
              "#6543C7",
              "#5F44AB",
              "#5A4691",
              "#54467C",
            ],
          },
          primaryColor: "purple",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
