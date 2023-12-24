/* eslint-disable react/no-unescaped-entities */
import "@/app/globals.css";
import SocialIcons from "./SocialIcons";

const About = () => {
  return (
    <section className="section-wrapper">
      <div className="section-header">
        <div className="header-section-line"></div>
        <h3>
          <div className="relative w-auto inline-block overflow-hidden">
            <div className="opacity-100 transform-none">
              <span className="header-section-title">
                About<span>.</span>
              </span>
            </div>
          </div>
        </h3>
      </div>
      <div className="about-content">
        <div>
          <div className="relative w-auto inline-block overflow-hidden">
            <div className="opacity-100 transform-none">
              <p className="about-aboutText about-highlightFirstLetter">
                Hey! I'm Bob, if you haven't already gathered that by now. I'm a
                painter turned software engineer from Daytona, Florida. I
                specialize in the backend, primarily Node and Rust, but love
                building with whatever tools are right for the job.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                inset: "4px 0px 4px 100%",
                background: "#6366f1",
                zIndex: 20,
              }}
            ></div>
          </div>
          <div className="relative w-auto inline-block overflow-hidden">
            <div className="opacity-100 transform-none">
              <p className="about-aboutText">
                Hey! I'm Bob, if you haven't already gathered that by now. I'm a
                painter turned software engineer from Daytona, Florida. I
                specialize in the backend, primarily Node and Rust, but love
                building with whatever tools are right for the job.
              </p>
            </div>
            <div
              style={{
                position: "absolute",
                inset: "4px 0px 4px 100%",
                background: "#6366f1",
                zIndex: 20,
              }}
            ></div>
          </div>
          <div className="relative w-auto inline-block overflow-hidden">
            <div className="opacity-100 transform-none">
              <div className="about-links-flex">
                <div className="about-links">
                  <span>My links</span>
                  <svg
                    stroke="#6366f1"
                    fill="#6366f1"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                  </svg>
                </div>
                <SocialIcons />
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                inset: "4px 0px 4px 100%",
                background: "#6366f1",
                zIndex: 20,
              }}
            ></div>
          </div>
        </div>
        <div className="text-white">hashes</div>
      </div>
    </section>
  );
};

export default About;
