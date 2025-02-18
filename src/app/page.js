import Contacts from "@/components/contacts/Contacts";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Loading from "@/components/loading/Loading";
import Main from "@/components/main/Main";
import Notification from "@/components/notification/Notification";
import Repair from "@/components/repair/Repair";
import SocialWidget from "@/components/social_widget/SocialWidget";
import Store from "@/components/store/Store";
import Policy from "@/modal/policy/Policy";
import RepairModal from "@/modal/repair_modal/RepairModal";
import StoreModal from "@/modal/store_modal/StoreModal";
import Api from "@/utils/Api";

export default async function Home() {

  const store = await Api.get(`api/products/all`) || []
  const services = await Api.get('api/services/all') || []
  let course = await Api.get('api/course/dollar') || 0
  const visit = await Api.post('api/visits/add')
  course = course.value / 100

  return (
    <>
      <Header />  

      <SocialWidget />

      <Main />

      <Repair services={services}/>

      <Store course={course} list={store}/>
    
      <Contacts />
      
      <Footer />

      <RepairModal services={services}/>

      <StoreModal course={course}/>

      <Policy />

      <Notification />

      <Loading />
    </>
  );
}
