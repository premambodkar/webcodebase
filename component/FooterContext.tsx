export const FooterContext = (props: any) => {
  return <footer className="bg-dark text-white py-4 text-center">
    <div className="container">
      <p className="mb-2">&copy; {new Date().getFullYear()} {props?.config?.site_title}. All rights reserved.</p>

      {/* Social Media Icons */}
      <div className="mb-3">
        <div className="mb-3">
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

      {/* Contact Info */}
      <div>
        <p className="mb-0">Email: <a href={`mailto:${props?.config?.contact_us?.email}`} className="text-white">{props?.config?.contact_us?.email}</a></p>
        <p className="mb-0">Phone: <a href={`tel:${props?.config?.contact_us?.phone}`} className="text-white">{props?.config?.contact_us?.phone}</a></p>
      </div>
    </div>
  </footer>
}