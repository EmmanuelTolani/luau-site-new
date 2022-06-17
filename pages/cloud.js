import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      title="Luau Cloud Server"
      bG="https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      color="white"
    >
      <Head></Head>
      <>
      <div className="devices">
        <div className="container">
        <section className="device__title">
          <h2>
           Luau Cloud server is the bridge between your EOS Field Device and your Display
          </h2>
          <p>
           The cloud server gathers and organizes all the photos and data taken by your devices. There are a few different options for cloud configuration.
          </p>
        </section>
        </div>
        <section className="device__camera">
          <h2>Public Cloud Configuration</h2>
          <div className="device__img">
            <img src="../src/img/website-images/turn-key-split.jpg" />
          </div>
          <p>
          EOS Field Devices can upload pictures and sensor data to the
                cloud using an EOS Cloud Link. The easiest cloud storage is the
                EOS Cloud Service, which is turn-key managed and secure server
                and storage password-protected and private to your company.{" "}
          </p>
        </section>
          <section className="device__camera">
          <h2>Private Cloud Configuration</h2>
          <div className="device__img">
            <img src="https://images.pexels.com/photos/4960630/pexels-photo-4960630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
          <p>
          Another option is EOS Private Cloud, which is a cloud server and
                storage per-configured by Luau Data Corp and then operated by
                your own IT staff. EOS Private Cloud offers all the features of
                the EOS Cloud Service within the confines of your own data
                center.{" "}
          </p>
        </section>
        {/* <section className="device__camera">
          <h2>Ground Cloud Configurations</h2>
          <div className="device__img">
            <img src="../src/img/website-images/DSCF1880.jpg" />
          </div>
          <p>
          Finally, an EOS system can operate without a cloud link using
                EOS Ground Cloud. In this configuration all pictures and sensor
                data remain in the EOS Field Network until they are retrieved by
                a secure link to a mobile device. This option allows a Field
                Network with no permanent data uplink, and history is retrieved
                wirelessly by occasional “drive-by”.{" "}
          </p>
        </section> */}
    </div>
      </>
    </AlternateLayout>
  );
}
