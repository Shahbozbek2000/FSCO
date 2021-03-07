import sectionStyles from '../styles/Sections.module.css'
import Link from 'next/link'
const Sections = () => {
    return ( 
     <div className={sectionStyles.section_wrapper}>
        <div className='container'>
          <div className={sectionStyles.section_wrapper_title}>
             <h3>The thing that motivates me is a very common form 
             of motivation. And that is, with other folk counting on me, 
             it's so easy to be motivated.</h3>
             <p>we work with business & provide solution to client with their business problem</p>
          </div>

          <div className='row'>
          
            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12'>
              <div className={sectionStyles.business_problem}>
                  <div className={sectionStyles.business_problem_icon}>
                     <img src='https://www.flaticon.com/svg/vstatic/svg/2904/2904859.svg?token=exp=1614319044~hmac=00a59c346ae79ed7329850dde1a5339a'
                     alt='icons' />
                  </div>
                  <div className={sectionStyles.business_problem_title}>
                   <h6>Financial Advice </h6>
                  </div>
                  <div className={sectionStyles.business_problem_info}>
                    <h5>
                     <Link href='/'>
                      <a>Market Statics Growth & Advance Analysis</a>
                     </Link>
                    </h5>
                  </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12'>
              <div className={sectionStyles.business_problem}>
                  <div className={sectionStyles.business_problem_icon}>
                     <img src='https://www.flaticon.com/svg/vstatic/svg/624/624739.svg?token=exp=1614319582~hmac=9cb10c9b1a11ce66839f8b6901616e5a'
                     alt='icons' />
                  </div>
                  <div className={sectionStyles.business_problem_title}>
                   <h6>Market Analysis </h6>
                  </div>
                  <div className={sectionStyles.business_problem_info}>
                    <h5>
                     <Link href='/'>
                      <a>Market Statics Growth & Advance Analysis</a>
                     </Link>
                    </h5>
                  </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12'>
              <div className={sectionStyles.business_problem}>
                  <div className={sectionStyles.business_problem_icon}>
                     <img src='https://www.flaticon.com/svg/vstatic/svg/636/636600.svg?token=exp=1614319758~hmac=e5c1bdcda7742aa0dfbf0581683ea6b4'
                     alt='icons' />
                  </div>
                  <div className={sectionStyles.business_problem_title}>
                    <h6>Web Solution</h6>
                  </div>
                  <div className={sectionStyles.business_problem_info}>
                    <h5>
                     <Link href='/'>
                      <a>Market Statics Growth & Advance Analysis</a>
                     </Link>
                    </h5>
                  </div>
              </div>
            </div>
          </div>
        </div>
     </div>
);
}
 export default Sections;