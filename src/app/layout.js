import { Montserrat } from "next/font/google";
import './../style/style.scss';
import Script from "next/script";
import Head from "next/head";

const main = Montserrat({ 
  subsets: ["latin"],
  variable: '--main-font',
  display: 'swap',
});

export const metadata = {
  title: "Сервис-маркет техники в г. Симферополь | iFix Store",
  description: "Ремонт любых смартфонов и бытовой электроники быстро и качественно. Продаём iPhone со склада без наценок по самым выгодным ценам. Гарантия на ремонт и устройства.",
  keywords: [
    'Сервис-маркет техники',
    'Купить айфон симферополь', 
    'купить смартфон симферополь', 
    'купить смартфон', 
    'купить айфон', 
    'ремонт телефонов Симферополь', 
    'ремонт смартфонов Симферополь', 
    'ремонт компьютеров Симферополь', 
    'ремонт бытовой электроники Симферополь', 
    'Ремонт планшетов Симферополь'
  ],
  author: "iFix Store",
  openGraph: {
      title: 'Сервис-маркет техники в г. Симферополь | iFix Store',
      // url: meta?.og_url,
      description: "Ремонт любых смартфонов и бытовой электроники быстро и качественно. Продаём iPhone со склада без наценок по самым выгодным ценам. Гарантия на ремонт и устройства.",
      images: [
        {
          // url: `${Api.url}/images/${meta?.og_image}`,
          width: 500,
          height: 400
        },
      ],
      siteName: 'iFix Store',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]?.url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
      </Head>

      <body className={`${main.variable}`}>
        <Script 
          src="https://api-maps.yandex.ru/v3/?apikey=52991695-e74b-4030-9b47-34a63d01b031&lang=ru_RU"
          strategy="beforeInteractive" 
        />
        {children}
      </body>
    </html>
  );
}
