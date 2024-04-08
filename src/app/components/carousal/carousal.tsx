import Image from "next/image";

import styles from "./styles.module.css";

const Carousal = () => {
  return (
    <section
      className={` w-full flex flex-col justify-center items-center gap-8 bg-yellow-500 py-8`}
    >
      <h4 className="sm:text-l md:text-xl lg:text-2xl">
        30,000+ innovative product teams trust Acme Notes{" "}
      </h4>
      <Image
        className={`${styles["scroll-animation"]}`}
        alt="trusted-users"
        height="1200"
        src="/user-logos.png"
        width="1100"
      />
    </section>
  );
};

export default Carousal;
