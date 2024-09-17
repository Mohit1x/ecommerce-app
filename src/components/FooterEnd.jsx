import { AMAZON_FOOTER_IMG } from "../utils/constants";

const FooterEnd = () => {
  return (
    <div className="flex items-start justify-center gap-2">
      <img src={AMAZON_FOOTER_IMG} className="w-20" />
      <p className="mt-1">© 2023 | Developed by</p>
      <a
        href="https://github.com/Mohit1x"
        target="_blank"
        className="mt-1 text-blue-600 underline"
      >
        Mohit Vyas
      </a>
    </div>
  );
};

export default FooterEnd;
