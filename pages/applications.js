import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import AlternateLayout from "../components/layouts/AlternateLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="layout">
    <Header />
      <Head></Head>
       <div className="applicationlanding">
        <div className="container">
          <div className="applicationlanding-container">
            <div className="title-container">
              <h1>
                {" "}
                 Eyes On Site&trade; Applications
              </h1>
            </div>
            <div className="img-container">
              <img src="src/img/website-images/orange-derrek.jpg"/>
            </div>
            {/* <div className="subtitle-container">
              <h2>Eyes On Sitetm saves time, money and worry for applications like: Construction Project Management , Oilfield Operations ,Environmental Monitoring and etc.</h2>
            </div> */}
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className="application">
        <div className="container">
        <section className="application__summary">
          <h2 className="application__title" >
            Eyes On Site<span className="trade">&trade;</span> saves time, money and worry
          </h2>
          <p className="application__subtitle">
            There are several  applications
            including: Construction project management, Oilfield operations, Site
            reclamation, Environmental monitoring, Rural properties , Custom
            projects.{" "}
          </p>
        </section>
        <section className="application__example">
          <h2 className="application__title">Application: Construction Project Management</h2>
          <div className="application__img">
            <img src="../src/img/website-images/application/Construction.png" />
            <img src="../src/img/website-images/application/Construction1.png" />
            Images courtesy of Parks Canada Agency
          </div>
          <div  className="application__img">
            
          </div>
          <p  className="application__text">
            All of the pictures and video in this section were taken with Eyes
            On Sitetm equipment. The time-lapse videos are generated directly
            from the system using a built-in movie feature
          </p>
        </section>

        <section className="application__example">
          <h2 className="application__title">Application: Oilfield Operations </h2>
          <div  className="application__img2" >
            <img src="../src/img/website-images/application/OilfieldOperations.jpg" />
          </div>
          <p  className="application__text">
            Nothing unusual is supposed to happen on most oilfield operating
            sites, and mostly nothing does, but leaks and failures happen
            occasionally and can have huge consequences. Here an operator checks
            on a pipeline riser. This site has a valve with remote control, and
            the state of the valve is visible in the picture (its open handle
            horizontal along the pipe), but the operator still visits
            occasionally to make sure nothing else is wrong.{" "}
          </p>
          <p  className="application__text">
            Other oilfield sites have problems with theft, vandalism, livestock,
            or operating parts that fail (such as pumpjack motors and pipeline
            compressors), so they need more visits for more time and money,
            mostly to discover that nothing has happened.{" "}
          </p>
        </section>
        <section className="application__example">
          <h2 className="application__title">Application: Site Reclamation </h2>
          <div className="application__img2">
            <img src="../src/img/website-images/application/SiteReclamation.png" />
          </div>
          <p className="application__text">
            Site reclamation is required on abandoned oilfield sites, but
            similar remediation is used for mines, old industrial sites, and
            “brownfield” construction sites. The process often takes years of
            waiting interspersed with frantic activity. In this video topsoil is
            being replaced on an oilfield site that has been excavated,
            remediated and recontoured. The final steps are topsoil and then
            re-seeding.
          </p>
          <p className="application__text">
            This Eyes On Site&trade; camera was installed by the landowner. The images
            are hazy because the camera has been unattended for more than a year
            so the lens dusty from the earth moving. The field of view sways
            because the camera is mounted on a tree and the wind is blowing.
            There is no building or AC power within half a mile of this site.
          </p>
        </section>
        <section className="application__example">
          <h2 className="application__title">Application: Environmental Monitoring</h2>
          <p className="application__text">
            Many projects require an environmental baseline before work begins,
            and possibly additional monitoring during and after completion. Eyes
            On Site&trade; is ideal for this application because these sites often
            have no services, and Eyes On Site doesn’t need any. A timelapse for
            any chosen time of day can be produced directly from the web
            interface.{" "}
          </p>
          <div className="application__img2">
            <img src="../src/img/website-images/application/EnvironmentalMonitoring.png" />
          </div>
        </section>
        </div>
        {/* <section className="application__example1">
          <div className="container">
          <div className="application__img2">
            <img src="../src/img/website-images/application/DeviceGraph.png" />
          </div>
          <p className="application__subtitle2">
            In addition to pictures and video, Eyes On Site can report on
            sunlight, temperature, and other variables the project may require.
          </p>
          
          </div>
        </section> */}
      <div className="container">
        <section className="application__example">
          <h2 className="application__title">Application: Rural Properties</h2>
          <p className="application__text">
            Rural properties, including farms and rural residential, have a
            constant problem with crime and intermittent policing. The problem
            is worse if the owners leave seasonally or on vacation.
          </p>
          <div className="application__img2"><img src="https://images.pexels.com/photos/235725/pexels-photo-235725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/></div>
        </section>
        <section className="application__example">
          <h2 className="application__title">Application: Special Projects</h2>
          <p className="application__text">
            Eyes On Site can be customized for a huge variety of custom
            surveillance and monitoring projects
          </p>
          <div className="application__img2">
            <img src="../src/img/website-images/nasa.jpg" />
            nasa project 
            </div>
        </section>
        <section className="application__example">
          <h2 className="application__title">Camera Applications</h2>
          <p className="application__text">
            The EOS210 camera body can be configured with 1 or 2, 8MP or 16MP
            swivel cameras, and the device includes a quad-core high-speed image
            processor that is capable of still image or video editing, as well
            as simple scene recognition.{" "}
          </p>
        </section>
        </div>
      </div>
      <Footer/>
      </div>
  );
}
