import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import VideoHero from "../VideoHero/VideoHero";
export default function MainLayout(props) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
