import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <meta property="og:title" content="Julinha" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://julinha-website.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://cdn.discordapp.com/icons/839112016542040064/6a3acc7f8ba7e85faf52c5629911e55e.png"
          />
          <meta
            property="og:description"
            content="Um simples bot 100% gratuito do Discord."
          />
          <meta name="theme-color" content="#FF0000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
