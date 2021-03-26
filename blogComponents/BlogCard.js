import blogCardStyles from "../styles/BlogCard.module.css";

const blogCards = [
  {
    id: 1,
    image:
      "https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Organization/Our%20Insights/Doing%20vs%20being%20Practical%20lessons%20on%20building%20an%20agile%20culture/Doing-vs-being-v2-1536x1536.jpg?mw=677&car=42:25",
    title: "Practical lessons on building an agile culture",
    info:
      "August 4, 2020 – Four global success stories offer insights and lessons learned on achieving organizational agility.",
  },
  {
    id: 2,
    image:
      "https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Organization/Our%20Insights/Agility%20to%20action%20Operationalizing%20a%20value-driven%20agile%20blueprint/Agility-to-action-1536x1536.jpg?mw=677&car=42:25",
    title: "Practical lessons on building an agile culture",
    info:
      "June 16, 2020 – To successfully transition to an agile operating model, business leaders should focus on four questions.",
  },
  {
    id: 3,
    image:
      "https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Organization/Our%20Insights/An%20operating%20model%20for%20the%20next%20normal%20Lessons%20from%20agile%20organizations%20in%20the%20crisis/155771256-1536x1536.jpg?mw=677&car=42:25",
    title: "Practical lessons on building an agile culture",
    info:
      "August 4, 2020 – Four global success stories offer insights and lessons learned on achieving organizational agility.",
  },
  {
    id: 4,
    image:
      "https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Operations/Our%20Insights/Lean%20management%20or%20agile%20The%20right%20answer%20may%20be%20both/standard-lean-management-184636872.jpg?mw=677&car=42:25",
    title: "Practical lessons on building an agile culture",
    info:
      "August 4, 2020 – Four global success stories offer insights and lessons learned on achieving organizational agility.",
  },
];

export function BlogCard() {
  return (
    <div className={blogCardStyles.blogCard_wrapper}>
      <div className="container-fluid mb-5" style={{width:'88%'}}>
        <div className="row">
        {
           blogCards.map((card, index) => (
               <div className='col-lg-3 col-sm-6 col-md-6 col-12' key={index}>
                 <div className={blogCardStyles.card}>
                   <div className={blogCardStyles.card_image}>
                      <img src={card.image} alt={card.title} />
                   </div>
                   <div className={blogCardStyles.card_body}>
                     <h5>{card.title}</h5>
                   </div>
                   <div className={blogCardStyles.card_footer}>
                     <p>{card.info}</p>
                   </div>
                 </div>
               </div>
           ))
        }
        </div>
      </div>
    </div>
  );
}
