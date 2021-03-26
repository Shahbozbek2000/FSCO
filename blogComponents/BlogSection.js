import blogSectionStyles from "../styles/BlogSection.module.css";

export function BlogSection() {
  return (
    <div className={blogSectionStyles.blogSection_wrapper}>
      <div className="container-fluid" style={{width:'120%'}}>
        <div className={blogSectionStyles.card}>
          <div className={blogSectionStyles.card_image}>
            <img
              src="https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Organization/Our%20Insights/Agility%20in%20the%20time%20of%20COVID%2019%20%20Changing%20your%20operating%20model%20in%20an%20age%20of%20turbulence/Agility-in-the-time-of-hero-1536x1536.jpg?mw=768&car=16:9"
              alt="blog"
            />
          </div>
          <div className={blogSectionStyles.card_info}>
            <div className={blogSectionStyles.card_title}>
              <p>Article</p>
            </div>
            <div className={blogSectionStyles.card_body}>
              <h3>
                Agility in the time of COVID-19: Changing your operating model
                in an age of turbulence
              </h3>
            </div>
            <div className={blogSectionStyles.card_footer}>
              <p>November 18, 2020 – Can organizations be transformed while
               employees are working remotely? Four real-life stories suggest that they can.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
