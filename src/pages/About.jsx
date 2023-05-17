import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="Row">
        <div className="Col-6">
          <h1>About us</h1>
          <strong>
            Our company has been operating since 1993 and sells its products in
            the Bags online boutique.
          </strong>
          <p>
            {" "}
            The catalog of our online store includes: business leather goods for
            men and women, leather and textile models, bags for every season,
            color and classic options, and most importantly - fashionable and
            really the best! More than a wide range will forever decide for you
            the question of where to buy a bag, and the excellent quality of our
            goods will delight every day. We follow the news and hurry to offer
            them to you at affordable prices as soon as they appear in the
            catalogs of our partners. If you are looking for a fashionable bag,
            you will definitely like it here!
          </p>
        </div>
        <div className="Col-6">
          <div className="About-u">
            <video controls autoPlay="true" loop="true">
              <source
                src="https://st4.depositphotos.com/24106373/41102/v/600/depositphotos_411021936-stock-video-girl-with-shopping-bags-spining.mp4"
                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
