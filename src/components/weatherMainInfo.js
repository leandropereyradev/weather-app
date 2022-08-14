export default function WeatherMainInfo({ weather }) {
  return (
    <div className="infoContainer">
      <div className="infoBox">
        <div className="infoCity">
          <div className="text-4xl">{weather?.location.name}</div>
          <div className="text-xl">{weather?.location.country}</div>
        </div>
        <div className="infoWeatherBox">
          <img src={`http:${weather?.current.condition.icon}`} alt={weather?.current.condition.text} className="img" rel="noreferrer" />
          <div>{weather?.current.condition.text}</div>
          <div>{weather?.current.temp_c}º</div>
        </div>
      </div>
      <div className="mapBox">
        <iframe
          title="mapa"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d169026.18866746363!2d${weather?.location.lon}25!3d${weather?.location.lat}9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1656268290968!5m2!1ses!2ses`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map"
        ></iframe>
      </div>
    </div>
  );
}
