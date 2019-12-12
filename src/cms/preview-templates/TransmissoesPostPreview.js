import React from "react";
import PropTypes from "prop-types";
import { TransmissoesPostTemplate } from "../../templates/transmissoes-post";

const TransmissoesPostPreview = ({ entry, widgetFor }) => (
  <TransmissoesPostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
);

TransmissoesPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default TransmissoesPostPreview;
