import { images } from '../../constants'
import './skills.css'

const skillType = [
  { name: 'js', url: images.Js },
  { name: 'react', url: images.React },
  { name: 'redux', url: images.Redux },
  { name: 'next', url: images.Next },
  { name: 'github', url: images.Github },
  { name: 'git', url: images.Git },
  { name: 'html', url: images.Html },
  { name: 'css', url: images.Css },
  { name: 'sass', url: images.Sass },
  { name: 'youtube', url: images.Youtube },
]

const Skills = () => {
  return (
    <section className="skill-section">
      <div className="skill-container">
        <div className="skill-icon">
          {skillType.map((item, index) => (
            <div
              key={item.name}
              className="skill-item"
              style={{ '--i': index }}>
              <img className="logo" src={item.url} alt={item.name} />
            </div>
          ))}
        </div>

        <div className="content"></div>
      </div>
    </section>
  )
}

export default Skills
