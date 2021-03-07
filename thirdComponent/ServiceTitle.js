import serviceTitleStyles from "../styles/ServiceTitle.module.css";

export function ServiceTitle() {
  return (
    <div className={serviceTitleStyles.business_services}>
      <div className="container">
        <div className={serviceTitleStyles.business_title}>
          <h2>
            COMLEX MOBILE DEVELOPMENT SERVICES FOR YOUR BUSINESS: FROM CUSTOM
            APPLICATIONS TO INTEGRATED SOLUTIONS
          </h2>
          <p>
            We deliver efficient approaches and high-end technologies that
            empower your software and help you create extra value for your
            clients. We’ve built over 320 software products for clients ranging
            from enterprises to startups and brought 8 years of experience to
            the table.
          </p>
        </div>
      </div>
    </div>
  );
}
