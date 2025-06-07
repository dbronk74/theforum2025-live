
import './landing.css';

function Landing() {
  return (
    <div className="intro">
      <img src="/forum_emblem.png" className="emblem" alt="The Forum Emblem" />
      <h1 className="headline">Enter The Forum</h1>
      <p className="tagline">Where Ideas Clash & Truth Emerges</p>

      <div className="branches">
        <div className="branch">
          <img src="/gauntlet_art.jpg" alt="The Gauntlet" />
          <h2>The Gauntlet</h2>
        </div>
        <div className="branch">
          <img src="/roundtable_art.jpg" alt="Round Table" />
          <h2>Round Table</h2>
        </div>
        <div className="branch">
          <img src="/realm_art.jpg" alt="Realm of Contemplation" />
          <h2>Realm of Contemplation</h2>
        </div>
        <div className="branch">
          <img src="/oracle_art.jpg" alt="The Oracle" />
          <h2>The Oracle</h2>
        </div>
      </div>
    </div>
  );
}

export default Landing;
