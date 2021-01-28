import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div>
        <h4>Version 1.0.0</h4>
        <Link to="/">Go Back</Link>
      </div>
    </Layout>
  );
}

export default About;
