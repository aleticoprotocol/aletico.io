import { Image } from "./image";

export const Teams = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Build your team</h2>
          <p>
            Whether you are an athlete wanting to track the teams you play on, a sports coach
            wanting to give out awards to the kids, a sports team tracking your climb to the
            championship, or a fan wanting to follow your favorite athletes, Aletico Teams lets you
            organize and track players.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
