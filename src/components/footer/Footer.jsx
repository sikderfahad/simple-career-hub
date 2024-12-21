import social from "../../assets/icons/social.png";

const Footer = () => {
  const createFooterNav = (title, ...args) => {
    // console.log(title, args);
    return (
      <nav>
        <h6 className="footer-title text-xl capitalize text-white">{title}</h6>
        {args.map((item, idx) => (
          <a key={idx} className="link link-hover capitalize text-gray-500">
            {item}
          </a>
        ))}
      </nav>
    );
  };

  return (
    <div className="bg-black py-20">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <footer className="footer">
          <aside>
            <h1 className="text-2xl font-medium text-white">CareerHub</h1>
            <p className="my-2 text-gray-500">
              There are many variations of passages <br /> of Lorem Ipsum , but
              the majority have <br /> suffered alteration in some form.
            </p>

            <img className="w-[150px]" src={social} alt="" />
          </aside>
          {createFooterNav(
            "company",
            "about us",
            "work",
            "latest news",
            "careers"
          )}

          {createFooterNav(
            "product",
            "prototype",
            "plans & pricing",
            "customers",
            "integrations"
          )}

          {createFooterNav(
            "support",
            "help desk",
            "sales",
            "become a partner",
            "developers"
          )}
          {createFooterNav(
            "contact",
            "524 Broadway , NYC",
            "+1 777 - 978 - 5570"
          )}
        </footer>

        <hr className="border border-gray-700 my-8" />

        <footer className="footer items-center p-4">
          <aside className="grid-flow-col items-center">
            <p className="text-gray-300">
              ©{new Date().getFullYear()} CareerHub. All Rights Reserved
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <span className="italic text-gray-500">
              Powered by <span className="text-gray-300">CareerHub</span>
            </span>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
