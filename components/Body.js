import bodyStyle from "../styles/Body.module.css";

const Body = () => {
  return (
    <>
      <div className={bodyStyle.section}>
        <div className={bodyStyle.title}>
          <h1 className={bodyStyle.title1}>devNEJ</h1>
          <h1>Fullstack Developer</h1>
        </div>

        <div className={bodyStyle.lowSection}>
          <div className={bodyStyle.webSection}>
          <div className={bodyStyle.textBox_left}>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>BIOGRAPHY</h1>
              <p>
                Work for money but design for love. I am Jerry Nnah a Fullstack
                Developer based in Nigeria
              </p>
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>CONTACT</h1>
              <p>+234 703 0077967</p>
              {/* <p>Port Harcourt, Nigeria</p> */}
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>SERVICES</h1>
              <p>
                Branding <br />
                Web development
                <br />
                App development
                <br />
                Photography
              </p>
            </div>
          </div>
          <div className={bodyStyle.circleHolder}>
            {/* <div className={bodyStyle.circle}></div> */}

            <div>
              <img className={bodyStyle.image} src="../nej.jpg" />
              <img className={bodyStyle.line} src="../lines.png" />
            </div>
          </div>
          <div className={bodyStyle.textBox_right}>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>YEARS OF EXPERIENCE</h1>
              <p>1</p>
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>CLIENT SATISFACTION</h1>
              <p>100%</p>
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>CLIENT REGION</h1>
              <p>GLOBAL</p>
            </div>
          </div>

          </div>
          <div className={bodyStyle.mobileSection}>
          <div className={bodyStyle.textBox_left}>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>BIOGRAPHY</h1>
              <p>
                Work for money but design for love. I am Jerry Nnah a Fullstack
                Developer based in Nigeria
              </p>
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>CONTACT</h1>
              <p>+234 703 0077967</p>
              {/* <p>Port Harcourt, Nigeria</p> */}
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>SERVICES</h1>
              <p>
                Branding <br />
                Web development
                <br />
                App development
                <br />
                Photography
              </p>
            </div>
          </div>
          <div className={bodyStyle.circleHolder}>
            {/* <div className={bodyStyle.circle}></div> */}

            <div>
              <img className={bodyStyle.image} src="../nej.jpg" />
              <img className={bodyStyle.line} src="../lines.png" />
            </div>
          </div>
          <div className={bodyStyle.textBox_right}>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>YEARS OF EXPERIENCE</h1>
              <p>1</p>
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>CLIENT SATISFACTION</h1>
              <p>100%</p>
            </div>
            <div className={bodyStyle.infoBox}>
              <h1 className={bodyStyle.h1}>CLIENT REGION</h1>
              <p>GLOBAL</p>
            </div>
          </div>

          </div>
          <div className={bodyStyle.boxHolders}>
          <div className={bodyStyle.boxShadow}>
            <h1 className={bodyStyle.h1}>BIOGRAPHY</h1>
          </div>
          <div className={bodyStyle.boxShadow}>
          <div className={bodyStyle.boxShadow}>
            <h1 className={bodyStyle.h1}>SERVICES</h1>
          </div>
          </div>
          <div className={bodyStyle.boxShadow}>
          <div className={bodyStyle.boxShadow}>
            <h1 className={bodyStyle.h1}>CONTACT</h1>
          </div>
          </div>
          </div>
          <div className={bodyStyle.footer}>
            <p>All rights reserved devNEJ</p>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Body;
