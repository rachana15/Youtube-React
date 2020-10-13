import React from "react";
import "../Style/css/ChannelRow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineSharp";

function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h2>
          {channel} {verified && <VerifiedIcon />}
        </h2>

        <p>
          {subs} subscribers . {noOfVideos} videos
        </p>
        <p className="channelRow__description">{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
