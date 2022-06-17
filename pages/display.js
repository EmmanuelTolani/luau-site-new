import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      title="Display"
      bG="https://images.pexels.com/photos/2064693/pexels-photo-2064693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      color="white"
    >
      <Head></Head>
      <>
      <div className="devices">
        <div className="container">
        <section className="device__title">
          <h2>
          The Eyes On Site<span className="trade">&trade; </span>system displays allow you to view your site on any device 24/7
          </h2>
          <p>
           Displays are any laptop, tablet , and mobile device. They allow you to view information about your site through the cloud at your convience.
          </p>
        </section>
        </div>
        <section className="device__camera">
          <h2>Web Devices</h2>
          <div className="device__img">
            <img src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <p>
            Securely log-in on your device to have full access on your site. Along with all the pictures and date of your site.
          </p>
        </section>
    </div>
      </>
    </AlternateLayout>
  );
}
