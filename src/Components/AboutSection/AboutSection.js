import React, {useState} from 'react'

const AboutSection = () => {
  const [teams, setTeam] = useState([
    {
      images: "/images/products/men/33.jpg",
      name: "Hileri Keol",
      title: "CEo & Founder At Company"
    },
    {
      images: "/images/products/men/34.jpg",
      name: "Hileri Keol",
      title: "CEo & Founder At Company"
    },
    {
      images: "/images/products/men/36.jpg",
      name: "Hileri Keol",
      title: "CEo & Founder At Company"
    },
    {
      images: "/images/products/men/39.jpg",
      name: "Hileri Keol",
      title: "CEo & Founder At Company"
    },
    
  ])
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="about-text">
            <h1>About Us</h1>
            <p>Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem Accusantium Doloremque Laudantium
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,

            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
          </div>
          <div className="team">
          <h4 className="team-title">Our Team</h4>
          <div className="team-grid">
            {teams.map(team=>(
              <div className="about-team">
                <div className="team-img">
                  <img src={team.images} alt=""/>
                  <div className="team-detail">
                  <h4>{team.name}</h4>
                  <p>{team.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
