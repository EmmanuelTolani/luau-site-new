import Head from "next/head";
import SystemLayout from "../components/layouts/SystemLayout";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className="layout">
      <Header />
      <Head></Head>
      <div className="systemlanding">
        <div className="container">
          <div className="systemlanding-container">
            <div className="title-container">
              <h2>
                {" "}
                The Eyes On Site&trade; System
              </h2>
            </div>
            <div className="img-container">
              <img src="../src/img/website-images/system-d.png" />
            </div>
          </div>
        </div>
      </div>
      {/* <section className="system-overview">
        <div className="container">
          <div className="systemoverview-container">
            <div className="left-side">
              <div className="title-container">
              <h2>
                Overview of <span>Eyes On Site&trade;</span>
              </h2>
              <p>
                <span>Eyes On Site&trade;</span> is a system of outdoor cameras
                and sensors that you can deploy anywhere and view from anywhere.
              </p>
              </div>
              <div className="allspecs"> 
              <div className="specs-container">
                <div className="spec one" >
                <i className="fa-solid fa-sun"></i>
                  <div className="spec-text">
                    <h6>Solar Powered  cameras and sensors</h6>
                    <h5>0 wires </h5>
                    </div>
                    </div>
                    <div className="spec two" >
                    <i className="fa-solid fa-tower-broadcast"></i>
                      <div className="spec-text">
                        <h6>Communication Distance</h6>
                        <h5>100m line-of-sight</h5>
                      </div>
                        </div>
                </div>
                <div className="specs-container">
                  <div className="spec three">
                  <i className="fa-solid fa-lock"></i>
                    <div className="spec-text">
                      <h6>Secure and Encrypted</h6>
                      <h5>100% privacy</h5>
                      </div>
                      </div>
                      <div className="spec four">
                      <i className="fa-solid fa-cloud"></i>
                        <div className="spec-text">
                          <h6>Managed server and storage</h6>
                          <h5>24/7 access</h5>
                          </div>
                          </div>
                      </div>
              </div>
            </div>
            <div className="system-img">
              <img src="./src/img/website-images/eyesonsite.png" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="systemwhy"></section>
      <section className="systemdetails">
        <div className="container">
          <div className="systemdetails-title">
            <h2>
              What is the Eyes On Site<span className="trade">&trade; </span>system?{" "}
            </h2>
            <p>
            <span>Eyes On Site<span className="trade">&trade; </span></span> is a system that allows you to view your site on any display remotely. The system consists of EOS Field Devices, the Luau Cloud Server, and your Display.
              <span>EOS Field Devices</span>, the{" "}
              <span>Luau Cloud Server.</span>, and your <span>Display</span>
            </p>
          </div>
          <div className="systemdetails-container">
            <div className="systemdetails-detail">
              <h2>EOS Field Devices</h2>
              <div className="systemdetails-detail-img">
                  <img src="./src/img/website-images//red-pipe.jpg" />
              </div>
              <p>
              The EOS Field Network is secure and encrypted. These devices are either uplinks with cameras or sensors.
              </p>
              <button>
                <Link href="/device">
                  <a>
                    Learn More
                  </a>
                </Link>
              </button>
            </div>
            <div className="systemdetails-detail">
              <h2>Displays</h2>
              <div className="systemdetails-detail-img">
               <img src="./src/img/website-images/turn-key.png" />
              </div>
              <p>
              The displays are your 24/7 view of your site. Manage your site personally or have us manage it with our turn-key system.
              </p>
              <button>
                <Link href="/display">
                  <a>
                    Learn More
                  </a>
                </Link>
              </button>
            </div>
            <div className="systemdetails-detail">
              <h2>Luau Cloud Server</h2>
              <div  className="systemdetails-detail-img">
              <img src="./src/img/website-images/cloud-chart.jpg" />
              </div>
              <p>
              Upload pictures and sensor data to the cloud using an EOS Cloud Link. EOS Private Cloud is a server and storage pre-configured by Luau Data Corp.
              </p>
              <button>
                <Link href="/cloud">
                  <a>
                    Learn More
                  </a>
                </Link>
              </button>
            </div>
            
          </div>
        </div>
      </section>
      <section className="systemfull">
        <div className="container">
        <div className="systemfull-container">
        <div className="systemfull-title">
              <h2>How does it work together?</h2>
          </div>
        <div className="systemfull-part">
          <div className="systemfull-number">
            1.
          </div>
          <div className="systemfull-info">
          <h2>
              monitor your site with your eos field devices
            </h2>
            <div className="systemfull-img">
            <img src="./src/img/website-images/DSCF1896.JPG" />
            </div>
            
            <p>
            EOS Field devices are the first step in the system. These outdoor devices are either cameras or sensors and communicate with each other, and they take information via photos and sensory data about your site.
            </p>
          </div>
        </div>
        <div className="systemfull-part">
        <div className="systemfull-number">
            2.
          </div>
          <div className="systemfull-info">
          <h2>
              Have all images and sensor information uploaded to the cloud
            </h2>
            <div className="systemfull-img">
            <img  src="./src/img/website-images/eyesonsite.png" />
            McDougall Stoney Mission Church
            </div>
            
            <p>
            Luau Cloud Server acts as a record of your site. The outdoor devices constantly record information, and with an uplink device, uplink devices will upload all your site's data to the cloud. Your cloud can be managed privately through your I.T service or by our turn-key system.
            </p>
        </div>
        </div>
        <div className="systemfull-part">
        <div className="systemfull-number">
            3.
          </div>
          <div className="systemfull-info">
          <h2>
              View your site information from the cloud on any device
            </h2>
            <div className="systemfull-img">
            <img src="https://images.pexels.com/photos/269323/pexels-photo-269323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <p>
            The displays allow you to access all the photos and sensory data for the whole history of your site at any time.
            </p>
        </div>
      </div>
        </div>
        </div>
      </section>
      {/* <section className="systemdetails1">
        <div className="container">
          <div className="systemdetails-title">
            <h2>EOS Field Devices</h2>
          </div>
          <div className="systemdetails-icons">
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="systemdetails-container">
            <div className="systemdetail">
              <div className="system-img">public cloud picture</div>
              <p>
                EOS Field Devices can upload pictures and sensor data to the
                cloud using an EOS Cloud Link. The easiest cloud storage is the
                EOS Cloud Service, which is turn-key managed and secure server
                and storage password-protected and private to your company.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">private cloud picture</div>
              <p>
                Another option is EOS Private Cloud, which is a cloud server and
                storage per-configured by Luau Data Corp and then operated by
                your own IT staff. EOS Private Cloud offers all the features of
                the EOS Cloud Service within the confines of your own data
                center.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">ground cloud picture</div>
              <p>
                Finally, an EOS system can operate without a cloud link using
                EOS Ground Cloud. In this configuration all pictures and sensor
                data remain in the EOS Field Network until they are retrieved by
                a secure link to a mobile device. This option allows a Field
                Network with no permanent data uplink, and history is retrieved
                wirelessly by occasional “drive-by”.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="systemdetails1">
        <div className="container">
          <div className="systemdetails-title">
            <h2>EOS Field Devices</h2>
          </div>
          <div className="systemdetails-icons">
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="systemdetails-container">
            <div className="systemdetail">
              <div className="system-img">public cloud picture</div>
              <p>
                EOS Field Devices can upload pictures and sensor data to the
                cloud using an EOS Cloud Link. The easiest cloud storage is the
                EOS Cloud Service, which is turn-key managed and secure server
                and storage password-protected and private to your company.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">private cloud picture</div>
              <p>
                Another option is EOS Private Cloud, which is a cloud server and
                storage per-configured by Luau Data Corp and then operated by
                your own IT staff. EOS Private Cloud offers all the features of
                the EOS Cloud Service within the confines of your own data
                center.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">ground cloud picture</div>
              <p>
                Finally, an EOS system can operate without a cloud link using
                EOS Ground Cloud. In this configuration all pictures and sensor
                data remain in the EOS Field Network until they are retrieved by
                a secure link to a mobile device. This option allows a Field
                Network with no permanent data uplink, and history is retrieved
                wirelessly by occasional “drive-by”.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="systemdetails1">
        <div className="container">
          <div className="systemdetails-title">
            <h2>EOS Field Devices</h2>
          </div>
          <div className="systemdetails-icons">
            <i className="fa-solid fa-cloud"></i>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="systemdetails-container">
            <div className="systemdetail">
              <div className="system-img">public cloud picture</div>
              <p>
                EOS Field Devices can upload pictures and sensor data to the
                cloud using an EOS Cloud Link. The easiest cloud storage is the
                EOS Cloud Service, which is turn-key managed and secure server
                and storage password-protected and private to your company.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">private cloud picture</div>
              <p>
                Another option is EOS Private Cloud, which is a cloud server and
                storage per-configured by Luau Data Corp and then operated by
                your own IT staff. EOS Private Cloud offers all the features of
                the EOS Cloud Service within the confines of your own data
                center.{" "}
              </p>
            </div>
            <div className="systemdetail">
              <div className="system-img">ground cloud picture</div>
              <p>
                Finally, an EOS system can operate without a cloud link using
                EOS Ground Cloud. In this configuration all pictures and sensor
                data remain in the EOS Field Network until they are retrieved by
                a secure link to a mobile device. This option allows a Field
                Network with no permanent data uplink, and history is retrieved
                wirelessly by occasional “drive-by”.{" "}
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
