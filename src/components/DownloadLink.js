import React from 'react';

const DownloadLink = ({ path, title, ...rest }) => {

  return (
    <a
      {...rest}
      href={path}
      download
    >
      {title}
    </a>
  );
};

export default DownloadLink;