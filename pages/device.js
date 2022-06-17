import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      title="Devices"
      bG="../src/img/website-images/multiple.jpg"
      color="white"
    >
      <Head></Head>
      <>
      <div className="devices">
        <div className="container">
        <section className="device__title">
          <h2>
          The Eyes On Site<span className="trade">&trade; </span>system devices can all join an EOS Field Network, and all
            devices are solar powered except for the EOS Powered Uplink
          </h2>
          <p>
            Device roles include uplink, camera, sensor, and camera. All devices are either industrial or hazardous.
          </p>
        </section>
        </div>
        <section className="device__camera">
          <h2>Camera Devices</h2>
          <div className="device__img">
            <img src="../src/img/website-images/products/EOS210.jpg" />
          </div>
          <p>
            Camera devices take pictures and video clips in response to a timer,
            nearby motion, user command, or a signal from a nearby EOS Field
            Device.{" "}
          </p>
        </section>
        <section className="device__sensor">
          <h2>Sensor Devices</h2>
          <div className="device__img">
            <img src="../src/img/website-images/products/EOS2P0.jpg" />
          </div>
          <p>
            Sensor devices recognize simple or complex sounds, vibration, motion
            or other inputs, and respond by signaling an event. The event can
            trigger a camera, send a message, increment a counter, or simply be
            recorded for later use.{" "}
          </p>
        </section>
        <section className="device__sensor">
          <h2>Specialty Sensors</h2>
          <p>
            Specialty sensor devices recognize people
            or vehicles passing by on a road or trail.{" "}
          </p>
          <div className="device__img"><img src="../src/img/website-images/DSCF1890.JPG" /></div>
          <p>
            For special projects, Luau Data Corp has produced specialty sensors
            such as this wind and weather sensor, used in a NASA project to
            study air traffic control for urban delivery drones.{" "}
          </p>
          <p>
            Do you have a specialty sensor requirement? EOS devices can
            interface to a wide variety of external sensors and can synthesize
            custom events from internal and external sensors using Machine
            Learning. For example, an EOS Sensor can learn the normal vibration
            of a motor and raise an event if something changes, maybe due to a
            cracked bearing or loss of oil pressure.{" "}
          </p>
        </section>
        <section className="device__sensor">
          <h2>Uplink Devices</h2>
          <div className="device__img"><img src="../src/img/website-images/red-pipe.jpg"/></div>
          <p>
            Uplink devices connect an EOS Field Network to the cloud. For speed
            and redundancy, an EOS Field Network can have any number of Uplink
            Devices, or possibly none at all.{" "}
          
            Some Camera Devices include an Uplink feature, so the simplest EOS
            Field Network is a single camera. In that case, uplink is via the
            cell network.{" "}
          
            In a Field Network with no cameras, or only satellite cameras, a
            dedicated solar Uplink Device can provide cell network uplink with
            or without pictures.{" "}
          
            On an outdoor site with a powered building, such as a farmhouse or
            business office, a powered Uplink can provide a cloud uplink using
            wifi instead of the cell network, usually at a cost savings.{" "}
        
            A Field Network with no internet connection can still record
            pictures and data locally, and this data can be retrieved wirelessly
            from a cell phone or tablet using the Eyes On Sitetm app.
          </p>
        </section>
    </div>
      </>
    </AlternateLayout>
  );
}
