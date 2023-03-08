import './ProjectCard.scss'

const ProjectCard = ({card}) => {
  return (
    <div className="projectCard">
      <img src={card.img} alt="img" />
      <div className="info">
        <div className="texts">
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard