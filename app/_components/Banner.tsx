import Image from "next/image";
import style from "@/app/_styles/banner.module.scss";
import GetSupport from "./icons/GetSupport";
import Link from "next/link";

const Banner = ({
  imgUrl,
  imgAlt = "",
  overlayTitle,
  overlayTxt,
  overlayMaxWidth = "57ch",
  btnTxt = "Enquire Now",
  getSupport = false,
}: {
  imgUrl: string;
  imgAlt?: string;
  overlayTitle: string;
  overlayTxt?: string;
  overlayMaxWidth?: string;
  btnTxt?: string;
  getSupport?: boolean;
}) => {
  return (
    <section className={style.banner}>
      <Image
        src={imgUrl}
        alt={imgAlt}
        height={"2000"}
        width={"2000"}
        className="w-screen h-auto"
      />
      <div className={style.overlay} style={{ maxWidth: overlayMaxWidth }}>
        <h1 className={style.overlayTitle}>{overlayTitle}</h1>
        {!overlayTxt ? <></> : <p className={style.overlayTxt}>{overlayTxt}</p>}
      </div>
      {/* TODO: Open modal when btn clicked  */}
      <Link href="/contact-us">
        <button className={`${style.enquireBtn} font-bold uppercase`}>
          {btnTxt}
        </button>
      </Link>
      {!getSupport ? (
        <></>
      ) : (
        <div className={style.getSupport}>
          <GetSupport />
        </div>
      )}
    </section>
  );
};

export default Banner;
