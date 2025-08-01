import { useEffect, useRef, useState } from "react";
const HeaderContext = (props: any) => {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed-top shadow-sm ${scrolled ? "bg-transparent" : "bg-neo"}`}
        style={{
          color: scrolled ? "black" : "white",
          transition: "background-color 0.3s ease, color 0.3s ease",
          backdropFilter: scrolled ? "blur(6px)" : "none",
        }}
      >
        <div className="container d-flex align-items-center justify-content-between py-3">
          <div className="d-flex align-items-center">
            <span className="h5 mb-0 fw-medium">{props?.config?.header?.title}</span>
          </div>
        </div>
      </header>

      <section
        className="position-relative d-flex align-items-center justify-content-center text-white text-center"
        style={{
          height: '100vh',
          backgroundImage: `url('/images/your-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
        }}
      >
        {/* Overlay backdrop */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
            zIndex: 1,
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold mb-4">{props?.config?.header?.subtitle}</h1>
          <p className="lead mb-4">{props?.config?.header?.short_descrpton}</p>
          <a className="btn btn-light text-primary fw-semibold px-4 py-2">
            {props?.config?.header?.cta_text}
          </a>
        </div>
      </section>

    </>
  );
}


export default HeaderContext