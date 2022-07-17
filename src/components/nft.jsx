export const Nft = (props) => {
  return (
    <div id='nft' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Get your game on</h2>
          <p>
            Chronicle your athletic stories on your card. A card is a stackable NFT representing your
            goals, stats, and accomplishments.
          </p>
        </div>
        <div className="nft-card">
          {" "}
          <img src="img/nft/card.jpg" className="img-responsive" alt="NFT image" />{" "}
        </div>
      </div>
    </div>
  )
}
