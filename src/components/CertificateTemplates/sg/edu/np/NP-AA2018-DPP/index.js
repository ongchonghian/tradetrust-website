import PropTypes from "prop-types";
import { MultiCertificateRenderer } from "../../../../MultiCertificateRenderer";
import { approvedAddresses } from "../common";
import NPCert from "./certificate";
import NPTranscript from "./transcript";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: NPCert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: NPTranscript
  }
];

const NPAA2018DPP = ({ certificate }) => (
  <MultiCertificateRenderer
    certificate={certificate}
    templates={templates}
    whitelist={approvedAddresses}
  />
);

NPAA2018DPP.displayName = "NP-AA2018-DPP Template";
NPAA2018DPP.propTypes = {
  certificate: PropTypes.object.isRequired
};

export default NPAA2018DPP;
