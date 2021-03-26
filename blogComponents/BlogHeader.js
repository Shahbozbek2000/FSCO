import blogHeaderStyles from "../styles/BlogHeader.module.css"
import Typical from 'react-typical'

export function BlogHeader() {
  return (
    <section>
      <div className={blogHeaderStyles.wrap}></div>
      <div className={blogHeaderStyles.blogHeader_wrapper}>
        <div className={blogHeaderStyles.blogHeader_info}>
          <div className={blogHeaderStyles.blogHeader_title}>
             <h1>
             <Typical loop={Infinity}
             steps={['Agile Organizations', 2000]} />
             </h1>
          </div>
          <div className={blogHeaderStyles.blogHeader_description}>
             <p>
              <Typical loop={Infinity} 
              steps={['New ways of working are needed to survive and thrive in a fast-moving, technology-driven world', 2000]} />
             </p>
            </div>
        </div>
      </div>
    </section>
  );
}
