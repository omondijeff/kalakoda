import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = "Kalakoda Boxing | One Ring, No Borders";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = "The premier Pan-African Sport & Entertainment Promotion company dedicated to revolutionizing African live events.";
  const metaDescription = description || siteDescription;
  const metaImage = image || "/og-image.png";
  const siteUrl = "https://kalakoda.com"; // Placeholder until actual domain is known

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content="boxing, Africa, Nairobi Nightmare, Fatuma Zarika, sports promotion, live events, Pan-African, combat sports" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl + (url || "")} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl + (url || "")} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
