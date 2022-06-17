import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Link from "next/link";

export default function Home() {
  return (
    <AlternateLayout
      title="Products"
      bG="../src/img/website-images/mcdougall.jpeg"
      color="white"
    >
      <Head></Head>
      <>
      <p style={{
        textAlign:"center"
      }} >McDougall Stoney Mission Church</p>
        <section className="products">
          <h2>All devices available in Industrial(I) and Hazardous(H) versions</h2>
          <div className="container">
            <div className="product-1">
              <div className="product-img">
                <img src="../src/img/website-images/DSCF1880.JPG"></img>
              </div>
              <div className="product-info">
                <h2>Camera EOS210</h2>
                <ol className="product-more">
                  <li className="product-more-info">
                    <h4>EOS210-UI Uplink Camera</h4>
                    <p>camera, local net, cell modem</p>
                  </li>
                  <li className="product-more-info">
                    <h4>EOS210-UH Uplink Camera</h4>
                    <p>camera, local net, cell modem, Zone 2 Safety</p>
                  </li>
                  <li className="product-more-info">
                    <h4>EOS210-LI Local Camera</h4>
                    <p>camera, local net</p>
                  </li>
                  <li className="product-more-info">
                    <h4>EOS210-LH Local Camera</h4>
                    <p>camera, local net, Zone 2 Safety</p>
                  </li>
                </ol>
                <div className="product-info__button-container">
                  {/* <button className="product-info__button"><Link href="/device">
              <a>Learn More</a>
              </Link></button> */}
                  <Link href="/purchase">
                    <button className="product-info__button1">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="product-2">
              <div className="product-info">
                <h2>Motion Sensor EOS2PO</h2>
                <ol className="product-more">
                  <li className="product-more-info">
                    <h4>EOS2P0-LI Local Custom Sensor</h4>
                    <p>local net, Machine Learning sensors</p>
                  </li>
                  <li className="product-more-info">
                    <h4>EOS2P0-LI Local Custom Sensor</h4>
                    <p>local net, Machine Learning sensors, Zone 2 Safety</p>
                  </li>
                </ol>
                <div className="product-info__button-container">
                  {/* <button className="product-info__button"><Link href="/device">
              <a>Learn More</a>
              </Link></button> */}
                  <Link href="/purchase">
                    <button className="product-info__button1">Buy Now</button>
                  </Link>
                </div>
              </div>
              <div className="product-img">
                <img src="../src/img/website-images/DSCF1916.JPG"></img>
              </div>
            </div>
            <div className="product-3">
              <div className="product-img">
                <img src="../src/img/website-images/DSCF1890.JPG"></img>
              </div>
              <div className="product-info">
                <h2>Proximity Sensor EOS2TO</h2>
                <ol className="product-more">
                  <li className="product-more-info">
                    <h4>EOS2T0-LI Local Entry Sensor</h4>
                    <p>proximity sensors, local net, leds</p>
                  </li>
                  <li className="product-more-info">
                    <h4>EOS2T0-LH Local Entry Sensor</h4>
                    <p>proximity sensors, local net, leds, Zone 2 Safety</p>
                  </li>
                </ol>
                <div className="product-info__button-container">
                  {/* <button className="product-info__button"><Link href="/device">
              <a>Learn More</a>
              </Link></button> */}
                  <Link href="/purchase">
                    <button className="product-info__button1">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
