import { Montserrat } from "next/font/google";
import './../style/style.scss';
import Script from "next/script";

const main = Montserrat({ 
  subsets: ["latin"],
  variable: '--main-font',
  display: 'swap',
});

export const metadata = {
  title: "iFix Store",
  description: "Generated by create next app",
  keywords: meta?.keywords,
  //   contentType: meta?.contentType,
  //   author: meta?.author,
  //   openGraph: {
  //       title: meta?.og_title,
  //       url: meta?.og_url,
  //       description: meta?.og_description,
  //       images: [
  //         {
  //           url: `${Api.url}/images/${meta?.og_image}`,
  //           width: 500,
  //           height: 400
  //         }
  //       ],
  //       siteName: meta?.og_site_name
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
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
