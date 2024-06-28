import React from "react";
import Link from "next/link";
import { AppFooter } from "./styles";

const Footer = () => {
  return (
    <AppFooter data-testid="footer">
      <p>
        Developed with ☕️ by{" "}
        <Link href="https://github.com/Sol-Zeta" target="_blank">
          Soledad Pattoglio
        </Link>
      </p>
    </AppFooter>
  );
};

export default Footer;
