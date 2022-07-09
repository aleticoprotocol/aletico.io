export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Get your game on</h2>
          <p>
            Chronicle your athletic stories on your card. A card is a stackable NFT representing your
            goals, stats, and accomplishments.
          </p>
        </div>
        <div className="team-card">
          {" "}
          <img src="img/team/card.jpg" className="img-responsive" alt="https://pixabay.com/users/alessandra1barbieri-2693565/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4760441" />{" "}
        </div>
      </div>
    </div>
  )
}
