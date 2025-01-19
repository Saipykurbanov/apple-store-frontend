import { Montserrat } from "next/font/google";
import './../style/style.scss';
import Script from "next/script";

const main = Montserrat({ 
  subsets: ["latin"],
  variable: '--main-font',
  display: 'swap',
});

export const metadata = {
  title: "Сервис-маркет техники в г. Симферополь | ifixStore",
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
  author: "ifixStore",
  openGraph: {
      title: 'Сервис-маркет техники в г. Симферополь | ifixStore',
      url: 'ifixstore.ru',
      description: "Ремонт любых смартфонов и бытовой электроники быстро и качественно. Продаём iPhone со склада без наценок по самым выгодным ценам. Гарантия на ремонт и устройства.",
      images: [
        {
          url: `/images/logo.jpeg`,
          width: 500,
          height: 400
        },
      ],
      siteName: 'ifixStore',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="height=device-height, 
                  width=device-width, initial-scale=1, minimum-scale=1,
                  maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi" />
        <link rel="icon" href={`/icons/favicon.ico`}/>
        <link
          rel="preload"
          href="/images/main.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>

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
