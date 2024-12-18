import Contacts from "@/components/contacts/Contacts";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Repair from "@/components/repair/Repair";
import SocialWidget from "@/components/social_widget/SocialWidget";
import Store from "@/components/store/Store";

export default function Home() {
  
  return (
    <>
      <Header />  

      <SocialWidget />

      <Main />

      <Repair />

      <Store />

      <Contacts />
      
      <Footer />
    </>
  );
}
