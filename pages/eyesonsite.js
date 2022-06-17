import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <AlternateLayout
      title="Eyes On Site&trade;"
      bG="../src/img/website-images/red-pipe.jpg"
      color="white"
    >
      <Head></Head>
      <>
        {/* <section className="field-tested">
          <h2>Field tested since 2016</h2>
          <div>left arrow</div>
          <div>
            <img></img>
            <p>
              <span>Trusted by: </span>Parks Canada Civil Infrastructure
            </p>
            <div>right arrow</div>
          </div>
        </section> */}
        <section className="products">
          <div className="product-1">
            <div className="product-img">
              <img src="../src/img/website-images/orange-derrek.jpg"></img>
            </div>
            <div className="product-info">
              <h2>
                Surveillance and Monitoring for outdoor sites with no electrical
                power.
              </h2>
              <p>
              Solar cameras and sensors run day and night with no external connections, mount on any post, rail or tree branch all weather, all seasons, and work in the rain, snow, hail or blistering heat.
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
          </div>
          <div className="product-2">
            <div className="product-info">
              <h2>Solar cameras and sensors are connected to the cloud.</h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                See your outdoor site on any web browser or mobile device. Get pictures and video clips triggered by time, nearby motion, or defined sensor events—record sensor data, including movement, sunlight, temperature, and specialty sensors.
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
            <div className="product-img">
              <img src="../src/img/website-images/four-bridges.jpg"></img>
            </div>
          </div>
          <div className="product-2">
            <div className="product-img">
              <img src="../src/img/website-images/eyesonsite.png"></img>
              <p style={{
                "textAlign": "center"
              }}>Images courtesy of Parks Canada Agency</p>
            </div>
            <div className="product-info">
              <h2>A sensor network wherever you put it! </h2>
              <p>
              Cameras and sensors self-organize to move their data. Choose zero, one or multiple cloud uplinks per site.
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
          </div>
          <div className="product-3">
            <div className="product-info">
              <h2>Scalable! Manage sites and regions geographically </h2>
              <p>
              Devices locate and map themselves by GPS. Manage any number of devices by list or map. Define your geographical regions and sites.
              </p>
              <button className="product-info__button"><Link href="/system">
              <a>Learn More</a>
              </Link></button>
            </div>
            <div className="product-img">
              <img src="../src/img/website-images/map-eyes.png"></img>
            </div>
          </div>
          <div className="product-2">
            <div className="product-img">
              <img src="../src/img/website-images/turn-key-split.jpg"></img>
            </div>
            <div className="product-info">
              <h2>Safe, Secure and Reliable</h2>
              <p>
              Wireless data is encrypted, and devices validate each other. For hazardous sites, Safety Certified devices available for Zone 2.
              </p>
              <button className="product-info__button"><Link href="/system">
             <a>Learn More</a> 
              </Link></button>
            </div>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
