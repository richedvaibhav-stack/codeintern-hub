import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const defaultKeywords = "1 Month Internship, Internship with Certificate, Free Internship, Java Internship, C++ Internship, Web Development Internship, Python Internship, React Internship, Frontend Internship, Backend Internship, Full Stack Internship, Software Engineering Internship, Remote Internship, Task Based Internship, Online Training with Certificate, IT Internship, Engineering Internship, Internship for Beginners, Internship for Freshers, Online Internship Program, HTML CSS JavaScript Internship, React JS Internship, SQL Internship, Data Science Internship, Machine Learning Internship, AI Internship, Cyber Security Internship, Android Internship, Flutter Internship, UI UX Internship, Programming Internship, Virtual Internship 2025, College Internship, Student Internship Online, Java OOP Internship, C++ DSA Internship, Python Pandas Internship, Responsive Design Internship, Professional Internship, Project Based Internship, Real World Internship, Developer Internship Program, Tech Internship 2025, Summer Internship, Winter Internship, Short Term Internship, Skill Development Internship";

const SEO = ({ title, description, keywords = defaultKeywords, ogImage = "https://lovable.dev/opengraph-image-p98pqg.png", canonicalUrl }: SEOProps) => {
  const fullTitle = `${title} | CodeIntern`;
  const currentUrl = canonicalUrl || window.location.href;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
