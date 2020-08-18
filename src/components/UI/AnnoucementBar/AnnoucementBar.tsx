import React from "react";
import styled from "@emotion/styled";
import { vars, mixin } from "../../../styles";
import { ReactRouterLinkButtonSolidOrangeWhite } from "./../../UI/Button";

export interface AnnoucementBarProps {
  className?: string;
}

export const AnnoucementBarUnStyled = ({ className }: AnnoucementBarProps) => {
  return (
    <section className={`${className} bg-brand-navy text-white`}>
      <div className="container-custom">
        <div className="row">
          <div className="col-12">
            <div className="announcement-bar">
              <div className="row align-items-center">
                <div className="col-12 col-lg-7">
                  <h1 className="mb-3" >Atlantic Carrier</h1>
                  <h5 className="mb-3">
                    Embracing the Future of Logistics
                  </h5>
                  <p className="mb-0">
                    At Atlantic Carrier, we provides comprehensive total logistic solution including Air & Sea freight, Project shipment, Professional Cargo handling, Transshipment, Storage Facility and much more.
                  </p>
                </div>
                <div className="col-12 col-lg-auto ml-lg-auto mt-4 mt-lg-0">                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AnnoucementBar = styled(AnnoucementBarUnStyled)`
  padding-top: 10px;
  padding-bottom: 10px;

  .announcement-bar {
    position: relative;
    background-color: #82AAFF;
    border-radius: 4px;
    background-image: url("/static/images/webinar/logistics-web banner.png");
    background-position: 0 100%;
    background-repeat: no-repeat;
    padding: 10px 5px;

    @media only screen and (min-width: ${vars.lg}) {
      padding: 10px 20px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  h1 {
    ${mixin.fontSourcesansproRegular};
  }

  h5 {
    ${mixin.fontSourcesansproRegular};
    max-width: 500px;
  }

  a {
    padding: 8px 24px 12px;
    ${mixin.fontSize(26)};

    &:hover {
      color: ${vars.greyLightest};
    }
  }
`;
