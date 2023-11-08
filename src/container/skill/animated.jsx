import { useRef } from 'react'
import { images } from '../../constants'
import './animated.css'

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

const AnimatedSkill = () => {
  let imgBox = useRef()
  let contentBox = useRef()
  console.log(imgBox)
  console.log(contentBox)

  for (let i = 0; i < imgBox.length; i++) {
    imgBox.current[i].addEventListener('mouseover', function () {
      for (let i = 0; i < contentBox.length; i++) {
        contentBox.current[i].className = 'contentBox'
      }
      document.getElementById(this.dataset.id).className = 'contentBox active'
    })
  }

  return (
    <section className="skill-section">
      <div className="skill-container">
        <div className="skill-icon">
          <div
            ref={imgBox}
            className="skill-item active"
            style={{ '--i': 1 }}
            data-id="content01">
            <img className="logo" src={images.Js} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item "
            style={{ '--i': 2 }}
            data-id="content02">
            <img className="logo" src={images.React} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item "
            style={{ '--i': 3 }}
            data-id="content03">
            <img className="logo" src={images.Redux} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item "
            style={{ '--i': 4 }}
            data-id="content04">
            <img className="logo" src={images.Next} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item "
            style={{ '--i': 5 }}
            data-id="content05">
            <img className="logo" src={images.Html} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item active"
            style={{ '--i': 6 }}
            data-id="content06">
            <img className="logo" src={images.Css} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item active"
            style={{ '--i': 7 }}
            data-id="content07">
            <img className="logo" src={images.Sass} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item active"
            style={{ '--i': 8 }}
            data-id="content08">
            <img className="logo" src={images.Git} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item active"
            style={{ '--i': 9 }}
            data-id="content09">
            <img className="logo" src={images.Github} alt="" />
          </div>
          <div
            ref={imgBox}
            className="skill-item active"
            style={{ '--i': 10 }}
            data-id="content10">
            <img className="logo" src={images.Youtube} alt="" />
          </div>
        </div>
        {/* content here */}
        <div className="content">
          {/* item */}
          <div id="content01" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Js} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content02" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.React} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content03" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Redux} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content04" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Next} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content05" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Html} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content06" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Css} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content07" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Sass} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content08" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Git} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content09" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Github} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
          {/* item */}
          <div id="content10" className="contentBox active" ref={contentBox}>
            <div className="card">
              <div className="skill-item">
                <img className="logo" src={images.Youtube} alt="" />
              </div>
              <div className="textBox">
                <h2>Javascript</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedSkill
