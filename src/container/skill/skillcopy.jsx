import { useRef } from 'react'
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
  let imgBox = useRef()
  let contentBox = useRef()

  for (let i = 0; i < imgBox.length; i++) {
    imgBox[i].addEventListener('onMouseOver', function () {
      for (let i = 0; i < contentBox.length; i++) {
        contentBox[i].className = 'contentBox'
      }
      document.getElementById(this.dataset.id).className = 'contentBox active'
    })
  }
  // contentBox.current.
  // const handleMouseOver = (item) => {
  //   contentBox.current.className = 'contentBox'
  //   // item.classList.add('contentBox')
  // }

  return (
    <section className="skill-section">
      <div className="skill-container">
        <div className="skill-icon">
          {skillType.map((item, index) => (
            <div
              ref={imgBox}
              key={item.name}
              className="skill-item active"
              style={{ '--i': index }}
              data-id={item.name}
              // onMouseOver={handleMouseOver}
            >
              <img className="logo" src={item.url} alt={item.name} />
            </div>
          ))}
        </div>

        <div className="content">
          {skillType.map((item) => (
            <div
              id={item.name}
              className="contentBox active"
              ref={contentBox}
              key={item.name}>
              <div className="card">
                <div className="skill-item">
                  <img className="logo" src={item.url} alt={item.name} />
                </div>
                <div className="textBox">
                  <h2>{item.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
