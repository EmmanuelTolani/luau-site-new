export default function Hero(props) {
    return (
      <div className="hero" style={{
          background: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${props.bG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: 'fixed',
          backgroundRepeat: "no-repeat",
          display: 'flex',
          alignItems:'center',
          justifyContent: 'center',
          color: `${props.color}`,
          height: '550px',
          width: "100vw"
      }
      }>
        <h1 className="title">{props.title}</h1>
      </div>
    );
  }
  