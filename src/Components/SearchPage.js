import React from "react";
import "../Style/css/SearchPage.css";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";
import VideoRow from "./VideoRow";
import ChannelRow from "./ChannelRow";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneSharpIcon />
        <h2> FILTER </h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJwFt03RAznOsPwlfo5c1kW1rp-1o3Xgpw9MNreQMQ=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="freeCodeCamp"
        verified
        subs="2.4M"
        noOfVideos={1200}
        description="Learn to code for free"
      />
      <hr />
      <VideoRow
        channel="freeCodeCamp"
        views="20M"
        timestamp="2 months ago"
        title="Learn Python - Full Course for Beginners [Tutorial]"
        description="This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time! "
        image="https://i.ytimg.com/an_webp/rfscVS0vtbw/mqdefault_6s.webp?du=3000&sqp=CPzXkvwF&rs=AOn4CLBCt6lY4Xt7r8aYlaZf1DkF66qQKQ"
      />
      <VideoRow
        channel="freeCodeCamp"
        views="20M"
        timestamp="2 months ago"
        title="Learn Python - Full Course for Beginners [Tutorial]"
        description="This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time! "
        image="https://i.ytimg.com/an_webp/rfscVS0vtbw/mqdefault_6s.webp?du=3000&sqp=CPzXkvwF&rs=AOn4CLBCt6lY4Xt7r8aYlaZf1DkF66qQKQ"
      />
      <VideoRow
        channel="freeCodeCamp"
        views="20M"
        timestamp="2 months ago"
        title="Learn Python - Full Course for Beginners [Tutorial]"
        description="This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time! "
        image="https://i.ytimg.com/an_webp/rfscVS0vtbw/mqdefault_6s.webp?du=3000&sqp=CPzXkvwF&rs=AOn4CLBCt6lY4Xt7r8aYlaZf1DkF66qQKQ"
      />
      <VideoRow
        channel="freeCodeCamp"
        views="20M"
        timestamp="2 months ago"
        title="Learn Python - Full Course for Beginners [Tutorial]"
        description="This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time! "
        image="https://i.ytimg.com/an_webp/rfscVS0vtbw/mqdefault_6s.webp?du=3000&sqp=CPzXkvwF&rs=AOn4CLBCt6lY4Xt7r8aYlaZf1DkF66qQKQ"
      />
      <VideoRow
        channel="freeCodeCamp"
        views="20M"
        timestamp="2 months ago"
        title="Learn Python - Full Course for Beginners [Tutorial]"
        description="This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time! "
        image="https://i.ytimg.com/an_webp/rfscVS0vtbw/mqdefault_6s.webp?du=3000&sqp=CPzXkvwF&rs=AOn4CLBCt6lY4Xt7r8aYlaZf1DkF66qQKQ"
      />
    </div>
  );
}

export default SearchPage;
