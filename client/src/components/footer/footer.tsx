import { Button } from "../../../components/ui/button";
import "./footer.css";

import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-sec">
      <div className="footerparent">
        {/* <p className="navbarbakchodi">
          1. Electric vehicle routing requires iPhone with iOS 15 or later and a
          compatible vehicle.{" "}
        </p>
        <p className="navbarbakchodi">
          2.Available on iPhone with A12 Bionic and later.{" "}
        </p>
        <p className="navbarbakchodi">
          3. Flyover is available in selected cities on iPhone 4s or later, iPad
          Pro, iPad (2nd generation or later), iPad Air or later, iPad mini or
          later, and iPod touch (5th generation or later). To experience Flyover
          as you move your device through space, you need iPhone 6s or later,
          iPad Pro, or iPad (5th generation or later). Cellular data charges may
          apply.{" "}
        </p>
        <p className="navbarbakchodi">
          4. Guides in Maps are available in selected cities. Some features may
          not be available for all countries or regions. View the complete list.
        </p> */}
        <div className="glass">
          <div className="footer-header">
            <div className="flex w-full items-center justify-between">
              <img
                src="/flair_logo copy.svg"
                width={100}
                height={100}
                className="manik  md:mb-0 "
                alt=""
              />
              <div className="flex items-center flex-col justify-start ">
                <div className="w-full text-base -mb-6 ml-4">
                  Backed by : &nbsp;
                </div>
                <div className="flex gap-2">
                  <img src="/yc.svg" className="m-0 p-0 w-[200px] h-[100px] " />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="main">
            <div className="col_main">
              <div className="col_sub1">
                <div className="logo-row">
                  <div className="logo-des">
                    <h3>Contact Info</h3>
                    <p>San Francisco, CA</p>
                    <p>(650)862-2930</p>
                  </div>
                  <h3 className="text-white">
                    <a
                      className="text-white"
                      href="mailto:hello@flairhealth.com"
                    >
                      hello@flairhealth.com
                    </a>
                  </h3>
                  <div className="link-row">
                    <div className=" flex gap-1 m-auto pb-4">
                      <a href="https://www.facebook.com/flairhealthcare">
                        <Button variant="ghost" className="p-2">
                          <Facebook className="w-5" />
                        </Button>
                      </a>
                      <a href="https://www.instagram.com/flairhealth/?igsh=MTJlazhuaTFyZ3ZmMw%3D%3D">
                        <Button variant="ghost" className="p-2">
                          <Instagram className="w-5" />
                        </Button>
                      </a>
                      <a href="https://www.linkedin.com/company/flairhealth/">
                        <Button variant="ghost" className="p-2">
                          <Linkedin className="w-5" />
                        </Button>
                      </a>
                      <a href="https://x.com/flairhealthcare?s=08">
                        <Button variant="ghost" className="p-2">
                          <Twitter className="w-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="s_tags">
                    {/* <span>
                    <AiOutlineInstagram />
                  </span>
                  <span>
                    <AiOutlineTwitter />
                  </span>
                  <span>
                    <BsFacebook />
                  </span> */}
                  </div>
                </div>
              </div>

              <div className="col_sub2"></div>
              <div className="col_sub3">
                <div className="link-row">
                  <div className="footer-header_sub">
                    <h3>Quick Links</h3>
                  </div>

                  <div className="link-des">
                    <a href="#testomonials" className="footer-links">
                      For Patient
                    </a>
                    <a href="#video" className="footer-links">
                      For Clinic
                    </a>
                    <a href="#" className="footer-links">
                      About
                    </a>
                    <a href="#" className="footer-links">
                      Privacy Policy
                    </a>
                    <a href="#" className="footer-links">
                      Terms of Use
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container pl-0 pt-2 md:p-0">
              <img
                src="https://www.hipaatraining.com/Content/images/badges/branded/badge4-orig.svg"
                className="m-0 p-0"
                width="80px"
                height="50px"
              />
            </div>
          </div>
        </div>

        {/* <div className="disclaimer">
          <div className="head_disc">
            <h3>Disclaimer</h3>
          </div>
          <div className="para_disc">
            <p>
              Information on this website may change without notice. We are not
              liable for any inaccuracies, omissions, or alterations. Users
              should verify details independently. This website is designed and
              developed by{" "}
              <a
                href="https://github.com/mangalamraj/"
                target="_blank"
                className="text-[#fd7028]"
              >
                Mangalam Raj
              </a>{" "}
              ©️ 2024. All rights reserved.
            </p>
          </div>
        </div> */}

        <div className="copyright_main">
          <hr className="f2_hr" />

          {/* <div className="col-12">
            <span className="copyright">
              ©Copyright 2024-2026 Lorem Ipsum. All Rights Reserved | Designed
              by Mangalam Raj
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
