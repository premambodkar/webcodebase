export const FooterContext = (props: any) => {
  return (
    <footer
      className="text-white py-5 bg-neo"
    >
      <div className="container">
        <div className="row">

          {/* Contact Details */}
          <div className="col-md-4 text-center text-md-start">
            <p className="mb-1">
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${props?.config?.contact_us?.email}`}
                className="text-white text-decoration-underline"
                style={{ transition: "color 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FACC15")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                {props?.config?.contact_us?.email}
              </a>
            </p>
            <p className="mb-0">
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${props?.config?.contact_us?.phone}`}
                className="text-white text-decoration-underline"
                style={{ transition: "color 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FACC15")}
                onMouseOut={(e) => (e.currentTarget.style.color = "white")}
              >
                {props?.config?.contact_us?.phone}
              </a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 mb-4 text-center">
            <h5>Follow Us</h5>
            <div>
              {props?.config?.social_links.map(({ name, url, icon }: any) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                  title={name.charAt(0).toUpperCase() + name.slice(1)}
                  style={{ transition: "color 0.3s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#FACC15")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                >
                  <i className={`bi ${icon}`} style={{ fontSize: "1.4rem" }}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Site Info */}
          <div className="col-md-4 mb-4 text-center text-md-end">
            <p className="mb-0">{props?.config?.site_title}</p>
            <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};
