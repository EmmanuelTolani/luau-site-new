import Head from "next/head";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      AlternateLayout
      title="Purchase"
      bG="../src/img/website-images/multiple.jpg"
      color="white"
    >
      <Head></Head>
      <>
        <section className="contact">
          <div className="contact__box">
            <h3>New luau devices will be appearing during 2022. To purchase devices, please call our number or email us.</h3>
            <span>780-628-5950</span>
            <span>Toll Free: 1-888-450-4036</span>
            <span>Email: Info@LuauData.com</span>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
