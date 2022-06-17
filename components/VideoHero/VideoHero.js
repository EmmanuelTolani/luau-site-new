export default function VideoHero(props) {
  return (
    <div className="videohero__background">
      <div className="videohero__foreground">
        <video loop={true} autoPlay="autoplay" muted>
          <source src="../src/videos/timelapse.mp4" type="video/mp4" />
        </video>
        <div className="videohero__content">
          <h3>Know Whats going on</h3>
        <h2>Manage your Site</h2>
      </div>
      </div>
      {/* <div className="videohero__content">
        <h2>Manage your Site</h2>
      </div> */}
    </div>
  );
}
