export const FooterContext = (props: any) => {
  return <footer className="text-white py-5" style={{ backgroundColor: '#2c3e50' }}>
  <div className="container">
    <div className="row">

      {/* Contact Details */}
      <div className="col-md-4 mb-4 text-center text-md-start">
        <h5>{props?.config?.contact_us?.title}</h5>
        <p>{props?.config?.contact_us?.description}</p>
        <p className="mb-1">
          <strong>Email:</strong>{" "}
          <a href={`mailto:${props?.config?.contact_us?.email}`} className="text-white">
            {props?.config?.contact_us?.email}
          </a>
        </p>
        <p className="mb-0">
          <strong>Phone:</strong>{" "}
          <a href={`tel:${props?.config?.contact_us?.phone}`} className="text-white">
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
            >
              <i className={`bi ${icon}`} style={{ fontSize: "1.4rem" }}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Site Info */}
      <div className="col-md-4 mb-4 text-center text-md-end">
        <h5>Company</h5>
        <p className="mb-0">{props?.config?.site_title}</p>
        <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>

    </div>
  </div>
</footer>

}