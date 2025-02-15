import URLS from "@/config/config";
import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex-shrink-0">
      <Link to={URLS.HOME} className="text-primary font-bold text-2xl">
        BloggerX
      </Link>
    </div>
  );
}

export default Logo;
