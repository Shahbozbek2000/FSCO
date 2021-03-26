import cardListStyles from "../styles/CardList.module.css"
import Link from 'next/link'

const cardList = [
  {
    id: 1,
    image:
      "https://mobidev.biz/wp-content/uploads/2019/07/guide-to-stages-of-ui-ux-design.png",
    title:'UI/UX DESIGN DELIVERABLES CHECKLIST',
    info:'Users are not supposed to have to change behavior to adapt to your product. This should be kept in mind when turning ideas into user-friendly software. UI/UX designers are the main software’s storytellers. The more they get involved in the planning and strategy of future software, the more innovative the product they design.',
    button:'visit blog'
  },
  {
    id: 2,
    image:
      "https://mobidev.biz/wp-content/uploads/2019/07/ui-ux-transparent-design-estimation.png",
    title:'HOW TO GET UI/UX DESIGN ESTIMATION',
    info:'It’s not always easy to find a reliable UI/UX company and get a transparent design estimation for the project. When UI/UX experts make estimates they consider such interface design matter tasks that may not be obvious. All of this information will be requested by the UI/UX expert for the design stage estimation.',
    button:'visit blog'
  },
];

export function CardList() {
  return (
    <div className={cardListStyles.cardList_wrapper}>
      <div className="container">
    
       <div className='row'>
          {
              cardList.map((list, index) => (
                  <div className='col-lg-6 col-sm-12 col-12 col-md-6 col-12' key={index}>
                      <div className={cardListStyles.cardList_content}>
                        <div className={cardListStyles.cardList_image}>
                          <img src={list.image} alt={list.title} />
                        </div>
                        <div className={cardListStyles.cardList_title}>
                            <h4>{list.title}</h4>
                        </div>
                        <div className={cardListStyles.cardList_info}>
                         <p>{list.info}</p>
                        </div>
                        <div className={cardListStyles.cardList_btn}>
                        <Link href='/blog'>
                          <button>{list.button}</button>
                        </Link>
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
