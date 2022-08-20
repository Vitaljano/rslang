function Footer() {
  return (
    <footer className="bg-footer py-8 text-white">
      <div className="container mx-auto px-4 flex justify-between ">
        <a
          href="https://rs.school/js/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-20"
            src={process.env.PUBLIC_URL + '/svg/rs_logo.svg'}
            alt=""
          />
        </a>
        <div>&copy;2022</div>

        <div>
          <img
            className="w-20"
            src={process.env.PUBLIC_URL + '/img/octocat.png'}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
