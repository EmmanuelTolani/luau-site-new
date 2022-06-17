import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import AlternateLayout from "../components/layouts/AlternateLayout";
import VideoHero from "../components/VideoHero/VideoHero";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <Head></Head>
      <VideoHero />
      <p style={{"textAlign":"center"}}>Images courtesy of Parks Canada Agency and  McDougall church</p>
      <div className="main">
        <section className="main-services">
          <div className="container">
          <h2 className="main-services__title">Brighter Site Management</h2>
          <p className="main-services__subtitle">See Your remote site on your screen</p>
          <div className="main-services__container">
            {/* <div className="main-services__service">
            <div className="main-services__img-container">
              <img src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            </div>
            <h2 className="main-services__service-header">Oil field operations</h2>
            <p className="main-services__service-subtitle">
             Track remote environmental conditions - wildfires, floods, snowfalls, and more , without leaving your office.
            </p>
            <span>1. Reduce Windshield Time</span>
            <span>2. Track construction progress </span>
            <Link href="/">
            <a >Read More</a>
            </Link>
          </div> */}
            <div className="main-services__service">
              <div className="main-services__img-container">
                <img src="https://images.pexels.com/photos/4170184/pexels-photo-4170184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <h2 className="main-services__service-header">
                Construction Managment
              </h2>
              <p className="main-services__service-subtitle">
              Track remote environmental conditions wildfires, floods,
                snowfalls, and more without leaving your office.
              </p>
              <span>1. Reduce Windshield Time</span>
              <span>2. Track construction progress </span>
              {/* <Link href="/applications">
                <a>Read More</a>
              </Link> */}
            </div>
            <div className="main-services__service">
              <div className="main-services__img-container">
                <img src="https://images.pexels.com/photos/3614167/pexels-photo-3614167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <h2 className="main-services__service-header">
                Environmental Remediation
              </h2>
              <p className="main-services__service-subtitle">
              Track the progress of your site for years remotely, prevent
                hazards.
              </p>
              <span>1. Reduce Windshield Time</span>
              <span>2. Quickly Respond to Hazards </span>

              {/* <Link href="/applications">
                <a>Read More</a>
              </Link> */}
            </div>
            <div className="main-services__service">
              <div className="main-services__img-container">
                <img src="https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
              </div>
              <h2 className="main-services__service-header">Oilfield</h2>
              <p className="main-services__service-subtitle">
              Track remote environmental conditions wildfires, floods,
                snowfalls, and more without leaving your office.
              </p>
              <span>1. Reduce Windshield Time</span>
              <span>2. Track construction progress </span>
              {/* <Link  href="/applications">
                <a>Read More</a>
              </Link> */}
            </div>
          </div>
          </div>
          
        </section>
        <section className="main-benefits">
          <div className="container">
          {/* <h2 className="main-benefits__title">Main Benefits</h2> */}
          <div className="main-benefits__container">
            <div className="main-benefits__benefit">
            <i className="fa-solid fa-sun"></i>
              <h3>Know What's Going On Anywhere The Sun Shines</h3>
              <p>View pictures and data with no local power. Status and history on your phone from anywhere the sun shines.{" "}
              </p>
            </div>
            <div className="main-benefits__benefit">
            <i className="fa-solid fa-plane-departure"></i>
              <h3>Travel Less and Respond Faster</h3>
              <p>Visit remote sites on your display instead of travelling there.
              See problems immediately, not days later.</p>
            </div>
            <div className="main-benefits__benefit">
            <i className="fa-solid fa-peace"></i>
              <h3>Peace of Mind </h3>
              <p>
                See your rural home or outdoor business from wherever you are.
                No on-site mysteries. Ongoing history explains what happened.
              </p>
            </div>
            <div className="main-benefits__benefit">
            <i className="fa-solid fa-piggy-bank"></i>
              <h3>Save Time, Save Money, Save Worry</h3>
              <p>Less Travel, Full History, and Faster Response.
              Save time and money, and always know what's been going on.
                Less travel saves money. 
              </p>
            </div>
          </div>
          </div>
          
        </section>
        {/* <section className="main-why">
        <div className="container">
        <div className="main-why__video">
            <img src="../src/img/website-images/camera-deer.jpg" />
          </div>
          <div className="main-why__text">
            <h2>Why Luau Data</h2>
            <p>
              Luau data remote monitoring systems enable you to remotely
              monitor, access, your site from remote locations. Our system
              utilizes solar energy, cameras, and sensors 24/7 to deliver
              information about your site. It provides you with all the data
              needed to remotely manage your site without cords and extra
              equipment. Luau's reliable and cost-effecctive solutions are the
              best choice for climate change specialist, construction managment,
              governents, and environmental remediation specialist.
            </p>
          </div>
        </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
