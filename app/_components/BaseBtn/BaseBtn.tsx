import Link from "next/link";

import styles from "./BaseBtn.module.scss";

export const BaseBtn = ({
  children,
  size = "df",
  link,
  type = "black",
  fullWidth,
  ariaLabel,
}: {
  children: React.ReactNode;
  link?: string;
  size?: "df" | "lg";
  type?: "black" | "white";
  fullWidth?: boolean;
  ariaLabel?: string;
}) => {
  const Tag = link ? Link : "button";
  const linkIsExternal = link?.startsWith("http");
  const buttonLink = `${link}`;

  return (
    <>
      <Tag
        className={`${styles.button} ${styles[size]} ${styles[type] || ""} ${
          fullWidth ? "w-full justify-center" : ""
        }`}
        target={linkIsExternal ? "_blank" : ""}
        aria-label={ariaLabel}
        replace={buttonLink ? true : undefined}
        {...(linkIsExternal
          ? {
              rel: "noopener",
            }
          : {})}
        href={buttonLink || ""}
      >
        <span className="relative">{children}</span>
      </Tag>
    </>
  );
};

export default BaseBtn;
