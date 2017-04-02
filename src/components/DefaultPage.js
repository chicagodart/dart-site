import React, { Component } from 'react';

// components
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

function DefaultPage({ content, videoCount, page, toggleVideo, anchors, toggle }) {
  console.log(page);
  return (
    <div className="max-width-12">
      <div className="clearfix content-sidebar-container">
        <div className="col col-8" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="col col-4 center fixed-sidebar">
          <Sidebar listItems={anchors} />
          {!!videoCount &&
            <button id="toggle-video" onClick={toggleVideo}>
              {toggle.video ? 'Hide Video' : 'Show Video'}
            </button>
          }
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = ({ pages, toggle }) => ({ pages, toggle });

export default connect(mapStateToProps)(DefaultPage);
