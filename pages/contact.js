import Head from "next/head";
import AlternateLayout from "../components/layouts/AlternateLayout";

export default function Home() {
  return (
    <AlternateLayout
      AlternateLayout
      title="Contact"
      bG="../src/img/website-images/multiple.jpg"
      color="white"
    >
      <Head></Head>
      <>
        <section className="contact">
          <div className="contact__box">
            <h3>Contact Luau Data Corporation at:</h3>
            <span>780-628-5950</span>
            <span>Toll Free: 1-888-450-4036</span>
            <span>Email: Info@LuauData.com</span>
          </div>
          <div className="contact__box">
            <span>Mail to:</span>
            <span>5615 94A Street NW, Edmonton</span>
            <span>T6E 4Z1</span>
          </div>
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.654491913431!2d-113.47392778425404!3d53.49250298000992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a018b8f78aeed9%3A0xbae45a17d6aa088e!2sLuau%20Data%20Corp!5e0!3m2!1sen!2sca!4v1631893046598!5m2!1sen!2sca"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </>
    </AlternateLayout>
  );
}
