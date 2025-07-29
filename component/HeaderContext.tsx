import { useEffect, useRef, useState } from "react";
const HeaderContext = (props: any) => {
  const headerRef = useRef<HTMLElement>(null);
  const [offsetHeight, setOffsetHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Check on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setOffsetHeight(headerRef.current.offsetHeight);
    }
  }, []);
  return (
    <>
      <header
        ref={headerRef}
        className={`fixed-top shadow-sm`}
        style={{
          backgroundColor: scrolled ? "transparent" : "rgb(44, 62, 80)",
          color: scrolled ? "black" : "white",
          transition: "background-color 0.3s ease, color 0.3s ease",
          backdropFilter: scrolled ? "blur(6px)" : "none",
        }}
      >
        <div className="container d-flex align-items-center justify-content-between py-3">
          {/* Site Title */}
          <div className="d-flex align-items-center">
            <span className="h5 mb-0 fw-medium">{props?.config?.site_title}</span>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a
                  href="#services"
                  className="nav-link"
                  style={{ color: scrolled ? "black" : "white" }}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className="nav-link"
                  style={{ color: scrolled ? "black" : "white" }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className="nav-link"
                  style={{ color: scrolled ? "black" : "white" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main style={{ marginTop: `${offsetHeight}px` }}>
        <div
          id="mainCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          style={{ height: `calc(100vh - ${offsetHeight}px)` }}
        >
          <div
            className="carousel-inner"
            style={{ height: "100%" }}
          >
            <div className="carousel-item active" style={{ height: "100%" }}>
              <img
                src="/images/1.png"
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt="Banner 1"
              />
            </div>
            <div className="carousel-item" style={{ height: "100%" }}>
              <img
                src="/images/2.png"
                className="d-block w-100 h-100"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                alt="Banner 2"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


export default HeaderContext