import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Hero  from "../Hero/Hero";
export default function SystemLayout(props) {
  return (
    <div>
      <Header />
      <Hero  bG={props.bG} title={props.title}  color={props.color} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
