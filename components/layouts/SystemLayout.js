import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero  from "../Hero/Hero";
export default function ContactLayout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}