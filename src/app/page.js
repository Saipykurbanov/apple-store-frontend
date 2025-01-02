import Contacts from "@/components/contacts/Contacts";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Repair from "@/components/repair/Repair";
import SocialWidget from "@/components/social_widget/SocialWidget";
import Store from "@/components/store/Store";
import RepairModal from "@/modal/repair_modal/RepairModal";
import StoreModal from "@/modal/store_modal/StoreModal";
import Api from "@/utils/Api";
import Loading from "./loading";

export default async function Home() {

  const store = await Api.get(`api/products/all`)
  
  return (
    <>
      <Header />  

      <SocialWidget />

      <Main />

      <Repair />

      <Store list={store}/>
    
      <Contacts />
      
      <Footer />

      <RepairModal />

      <StoreModal />
    </>
  );
}
