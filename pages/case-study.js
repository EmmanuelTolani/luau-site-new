import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Link from "next/dist/client/link";

export default function Home() {
  return (
    <AlternateLayout
      title="Case Studies"
      bG="https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      color="white"
    >
      <Head></Head>
      <>
        <section className="case-studys">
          <div className="case-study-1">
            <div className="case-study-img">
              <img src="https://kawarthanow.com/wp-content/uploads/2017/05/lock36-kirkfield.jpg"></img>
            </div>
            <div className="case-study-info">
              <h2>Waterways</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <button className="case-study-info__button"><Link href="/applications">
              <a>Learn More</a>
              </Link></button>
            </div>
          </div>
          <div className="case-study-2">
            <div className="case-study-info">
              <h2>Mcdougall Church</h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <button className="case-study-info__button"><Link href="/applications">
              <a>Learn More</a>
              </Link></button>
            </div>
            <div className="case-study-img">
              <img src="../src/img/website-images/mcdougall.jpeg"></img>
            </div>
          </div>
          <div className="case-study-3">
            <div className="case-study-img">
              <img src="../src/img/website-images/DSCF1890.jpg"></img>
            </div>
            <div className="case-study-info">
              <h2>Reclamation</h2>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <button className="case-study-info__button"><Link href="/applications">
              <a>Learn More</a>
              </Link></button>
            </div>
          </div>
          <div className="case-study-4">
            <div className="case-study-info">
              <h2>Oilfield Operations</h2>
              <p
                style={{
                  textAlign: "center",
                }}
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <button className="case-study-info__button"><Link href="/applications">
              <a>Learn More</a>
              </Link></button>
            </div>
            <div className="case-study-img">
              <img src="https://assets.spe.org/dims4/default/a8551cb/2147483647/strip/true/crop/1024x718+0+0/resize/800x561!/quality/90/?url=http%3A%2F%2Fspe-brightspot.s3.amazonaws.com%2F40%2F69%2F03e1a5df7783871f348c6fae4cf4%2Fdrilling-olympus-hero.jpg"></img>
            </div>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
