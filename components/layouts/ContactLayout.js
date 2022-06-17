import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero  from "../Hero/Hero";
export default function ContactLayout(props) {
  return (
    <div>
      <Header />
      <Hero  bG={'https://www.planradar.com/wp-content/uploads/2020/12/MAPR-1484_GENERAL_desktop_20200917.jpg.webp'} title={props.title}  />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
