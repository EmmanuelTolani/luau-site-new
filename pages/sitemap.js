import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Link from "next/link";

export default function Home() {
  return (
    <AlternateLayout
      title="SiteMap"
      bG="../src/img/website-images/mcdougall.jpeg"
      color="white"
    >
      <Head></Head>
      <>
        <div className="sitemap">
          <div className="container">
          <h3 className="sitemap__title">Site Map</h3>
          <div className="sitemap__links">
            <div className="sitemap__link">
              <h4 className="sitemap__link-title">Luau</h4>
              <ul>
              <li>
                  <Link href="/">
                      <a>
                          Home
                      </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/about">
                      <a>
                          About
                      </a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact">
                      <a>
                          Contact
                      </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sitemap__link">
              <h4 className="sitemap__link-title">Products</h4>
              <ul>
                <li>
                  <Link href="/products">
                      <a>
                          Products
                      </a>
                  </Link>
                </li>
                <li>
                  <Link href="/purchase">
                      <a>
                          Purchase
                      </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sitemap__link">
              <h4 className="sitemap__link-title">Applications</h4>
              <ul>
                <li>
                  <Link href="/applications">
                      <a>
                          Applications
                      </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sitemap__link">
              <h4 className="sitemap__link-title">eyes on site</h4>
              <ul>
                <li>
                  <Link href="/eyesonsite">
                      <a>
                          Eyes on site
                      </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sitemap__link">
              <h4 className="sitemap__link-title">System</h4>
              <ul>
                <li>
                  <Link href="/system">
                      <a>
                          Overview
                      </a>
                  </Link>
                </li>
                <li>
                  <Link href="/cloud">
                      <a>
                          Cloud Server
                      </a>
                  </Link>
                </li>
                <li>
                  <Link href="/display">
                      <a>
                          Display
                      </a>
                  </Link>
                </li>
                <li>
                  <Link href="/device">
                      <a>
                          Devices and sensors
                      </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
      </>
    </AlternateLayout>
  );
}
