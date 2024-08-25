"use client";

import React from "react";
import "./showError.css";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("./");
  };
  return (
    <section className="wrapper2">
      <div className="container">
        <div id="scene" className="scene" data-hover-only="false">
          <div className="circle" data-depth="1.2"></div>

          <div className="one" data-depth="0.9">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>

          <div className="two" data-depth="0.60">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>

          <div className="three" data-depth="0.40">
            <div className="content">
              <span className="piece"></span>
              <span className="piece"></span>
              <span className="piece"></span>
            </div>
          </div>

          <p className="p404" data-depth="0.50">
            404
          </p>
          <p className="p404" data-depth="0.10">
            404
          </p>
        </div>

        <div className="text">
          <article>
            <p>
              Uh oh! Login failed. Please check your credentials.. and go back
              to try again! <br />
              SSETH Cares!!
            </p>

            <button onClick={goHome}>Go Home!</button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Page;
