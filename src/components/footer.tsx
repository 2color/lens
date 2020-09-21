import React from "react";
import theme from "../theme";
import styled from "styled-components";

const FooterSection = styled.div`
  margin: ${theme.space[96]} auto ${theme.space[256]} auto;
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 0;
  padding-top: ${theme.space[80]};
  border-top: 1px solid ${theme.colors.gray300};
  .logo {
    height: 24px;
  }

  .column {
    flex: 2;
  }
  .four {
    flex: 3;
  }

  .column .header {
    font-weight: bold;
    font-size: ${theme.fontSizes[16]};
    line-height: 1;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${theme.colors.gray500};
  }

  .column .link {
    display: block;
    margin-top: ${theme.space[24]};
    font-size: ${theme.fontSizes[16]};
    line-height: 1;
    color: ${theme.colors.gray500};
  }

  .column .link + .link {
    margin-top: ${theme.space[16]};
  }

  .column .link:hover {
    color: ${theme.colors.gray600};
  }

  .column .link:active {
    color: ${theme.colors.gray700};
  }

  .column .group + .group {
    margin-top: ${theme.space[48]};
  }

  .jobs .tag {
    display: inline-block;
    border-radius: 6px;
    margin-left: ${theme.space[8]};
    padding: ${theme.space[4]} ${theme.space[8]};
    background: ${theme.colors.green500};
    font-size: ${theme.fontSizes[12]};
    font-weight: bold;
    color: white;
    transition: transform ${theme.transitions.standard};
  }

  .jobs:hover .tag {
    transform: scale(1.05);
  }

  .jobs .tag.black {
    background: ${theme.colors.black};
  }

  .logo {
    fill: ${theme.colors.gray500};
  }

  .four .description {
    margin-top: ${theme.space[16]};
    font-size: ${theme.fontSizes[16]};
    line-height: 1.375;
    color: ${theme.colors.gray500};
  }

  .social {
    margin-top: ${theme.space[32]};
    display: flex;
    max-width: 100px;
  }
  .social a + a {
    margin-left: ${theme.space[16]};
  }

  .social svg {
    width: 24px;
    height: 24px;
    transition: transform ${theme.transitions.standard};
  }

  .social svg:hover {
    transform: scale(1.2);
  }

  .copyright {
    margin-top: ${theme.space[32]};
    font-size: ${theme.fontSizes[16]};
    line-height: 1;
    color: ${theme.colors.gray500};
  }

  a.cookie-pref {
    text-decoration: underline;
    cursor: pointer;
  }

  .berlin {
    margin-top: ${theme.space[8]};
    font-size: ${theme.fontSizes[16]};
    line-height: 1;
    color: ${theme.colors.gray500};
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    margin-top: ${theme.space[48]};
    margin-bottom: ${theme.space[48]};
    flex-direction: column;
    padding: 0 24px;

    .column {
      margin-top: ${theme.space[48]};
    }

    .column .group + .group {
      margin-top: ${theme.space[48]};
    }
  }
`;


const Footer = ({ newsletterComponent }: any) => (
  <FooterSection>
    <div className="column one">
      <svg
        className="logo"
        viewBox="0 0 90 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.736 11.947h.9c.842 0 1.471-.168 1.89-.502.417-.335.626-.822.626-1.462 0-.645-.175-1.122-.525-1.43-.35-.308-.899-.462-1.646-.462h-1.245v3.856zm6.179-2.061c0 1.398-.434 2.466-1.303 3.206-.867.741-2.101 1.11-3.702 1.11h-1.174v4.62H32V5.835h4.122c1.565 0 2.755.34 3.57 1.017.815.678 1.223 1.69 1.223 3.034zM48.167 8.704c.365 0 .668.027.91.08l-.203 2.54a3.08 3.08 0 00-.795-.088c-.859 0-1.528.222-2.008.666-.48.444-.72 1.066-.72 1.866v5.054H42.66V8.891h2.039l.397 1.67h.132a3.726 3.726 0 011.24-1.346c.521-.34 1.087-.51 1.7-.51zM50.505 18.822h2.692V8.891h-2.692v9.931zM50.39 6.323c0-.882.489-1.323 1.465-1.323.977 0 1.466.441 1.466 1.323 0 .421-.122.748-.366.982-.245.234-.611.35-1.1.35-.976 0-1.465-.443-1.465-1.332zM62.675 15.873c0 1.019-.352 1.795-1.055 2.328-.703.532-1.755.799-3.155.799-.719 0-1.33-.049-1.836-.147a6.904 6.904 0 01-1.421-.43v-2.24c.5.238 1.063.436 1.69.596.627.16 1.178.24 1.655.24.977 0 1.465-.284 1.465-.853a.715.715 0 00-.194-.52c-.13-.133-.353-.284-.67-.453a16.977 16.977 0 00-1.272-.59c-.759-.32-1.317-.616-1.672-.889a2.488 2.488 0 01-.777-.937c-.162-.352-.243-.786-.243-1.301 0-.883.34-1.565 1.02-2.048.68-.482 1.642-.724 2.89-.724 1.189 0 2.345.261 3.469.782l-.812 1.954a14.913 14.913 0 00-1.386-.524 4.326 4.326 0 00-1.315-.204c-.794 0-1.192.216-1.192.648 0 .243.129.454.384.631.257.178.817.441 1.682.79.77.315 1.336.608 1.695.88.358.273.623.586.794.942.17.355.256.779.256 1.27zM73.34 18.822h-2.693v-5.8c0-.717-.119-1.255-.357-1.613-.238-.358-.613-.537-1.125-.537-.689 0-1.189.254-1.5.764-.313.51-.469 1.347-.469 2.514v4.672h-2.692V8.891h2.057l.362 1.27h.15a2.741 2.741 0 011.147-1.07c.5-.258 1.074-.387 1.722-.387 1.477 0 2.477.486 3 1.457h.239c.265-.462.654-.82 1.17-1.075.514-.255 1.095-.382 1.743-.382 1.118 0 1.964.289 2.537.866.574.578.86 1.503.86 2.776v6.476h-2.7v-5.8c0-.717-.12-1.255-.358-1.613-.238-.358-.613-.537-1.125-.537-.66 0-1.152.237-1.479.71-.326.474-.49 1.226-.49 2.257v4.983zM87.326 14.22l-1.042.036c-.783.024-1.365.166-1.747.427-.383.26-.574.657-.574 1.19 0 .764.435 1.146 1.306 1.146.624 0 1.123-.18 1.496-.542.374-.361.56-.84.56-1.44v-.816zm.794 4.602l-.52-1.35h-.072c-.453.575-.919.973-1.399 1.195-.479.222-1.104.333-1.875.333-.948 0-1.693-.273-2.238-.817-.544-.545-.816-1.32-.816-2.328 0-1.054.366-1.831 1.099-2.332.733-.5 1.837-.777 3.314-.83l1.713-.053v-.436c0-1.006-.512-1.51-1.536-1.51-.789 0-1.716.24-2.78.72l-.892-1.83c1.136-.598 2.395-.898 3.778-.898 1.324 0 2.339.29 3.045.871.706.58 1.059 1.463 1.059 2.647v6.618h-1.88zM18.01 19.037L7.163 22.224a.454.454 0 01-.58-.52L10.46 3.267c.073-.345.552-.4.704-.08l7.173 15.138a.514.514 0 01-.327.713zm1.86-.752L11.562.757a1.333 1.333 0 00-1.136-.755 1.32 1.32 0 00-1.213.626l-9.009 14.5c-.279.451-.273 1.008.016 1.455l4.404 6.778a1.419 1.419 0 001.59.581l12.782-3.756c.392-.116.712-.39.88-.756a1.354 1.354 0 00-.008-1.145z"
        />
      </svg>
    </div>
    <div className="column two">
      <div className="group">
        <h3 className="header">Products</h3>
        <a
          className="link"
          href="https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/api"
        >
          Prisma Client
        </a>
        <a className="link" href="https://app.prisma.io/login">
          Prisma 1 Cloud
        </a>
      </div>
      <div className="group">
        <h3 className="header">Resources</h3>
        <a className="link" href="https://www.prisma.io/docs/">
          Docs
        </a>
        <a
          className="link"
          href="https://www.prisma.io/docs/getting-started/quickstart"
        >
          Get Started
        </a>
        <a
          className="link"
          href="https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/generating-prisma-client"
        >
          API Reference
        </a>
        <a className="link" href="https://github.com/prisma/prisma-examples">
          Examples
        </a>
        <a className="link" href="https://www.howtographql.com/">
          How to GraphQL
        </a>
        <a className="link" href="https://dataguide.prisma.io/">
          Data Guide
        </a>
      </div>
    </div>
    <div className="column three">
      <div className="group">
        <h3 className="header">Community</h3>
        <a className="link" href="https://www.prisma.io/community">
          Meet the Community
        </a>
        <a className="link" href="https://slack.prisma.io/">
          Slack
        </a>
        <a className="link" href="https://github.com/prisma">
          GitHub
        </a>
        <a className="link" href="https://github.com/prisma/prisma/discussions">
          Discussions
        </a>
        <a className="link" href="https://www.meetup.com/graphql-berlin/">
          GraphQL Meetup
        </a>
        <a className="link" href="https://www.meetup.com/TypeScript-Berlin/">
          TypeScript Meetup
        </a>
      </div>
      <div className="group">
        <h3 className="header">Company</h3>
        <a className="link" href="https://www.prisma.io/about">
          About
        </a>
        <a className="link" href="https://www.prisma.io/jobs">
          Jobs
        </a>
        <a
          className="link jobs"
          href="https://www.notion.so/prismaio/What-Prisma-Cares-About-32946d99f9ea4925a796663dc8945c42"
        >
          Causes <span className="tag black">Black Lives Matter</span>
        </a>
        <a className="link" href="/blog/">
          Blog
        </a>
        <a
          className="link"
          href="https://gist.github.com/nikolasburk/c0f34b0cc50d3403e2e0d40c0e6510aa"
        >
          Terms & Privacy
        </a>
      </div>
    </div>
    <div className="column four">
      <div className="group">
        <h3 className="header">Newsletter</h3>
        <p className="description">
          Stay up to date with the latest features and changes to Prisma
        </p>
        {newsletterComponent}
      </div>
      <div className="group">
        <h3 className="header">Find Us</h3>
        <div className="social">
          <a href="https://twitter.com/prisma">
            <svg
              viewBox="0 0 24 20 "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 1.01a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0023 1.01v0z"
                stroke={theme.colors.gray500}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://www.facebook.com/prisma.io">
            <svg
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1H9a5 5 0 00-5 5v3H1v4h3v8h4v-8h3l1-4H8V6a1 1 0 011-1h3V1z"
                stroke={theme.colors.gray500}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://www.youtube.com/prismadata">
            <svg
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.54 3.42a2.78 2.78 0 00-1.94-2C18.88 1 12 1 12 1s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 8.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 16c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2c.313-1.732.467-3.49.46-5.25a29.005 29.005 0 00-.46-5.33v0z"
                stroke={theme.colors.gray500}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75 12.02l5.75-3.27-5.75-3.27v6.54z"
                stroke={theme.colors.gray500}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://slack.prisma.io/">
            <svg
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 10.6c-.996 0-1.8-.804-1.8-1.8v-6c0-.996.804-1.8 1.8-1.8s1.8.804 1.8 1.8v6c0 .996-.804 1.8-1.8 1.8zM23.2 10.6h-1.8V8.8c0-.996.804-1.8 1.8-1.8s1.8.804 1.8 1.8-.804 1.8-1.8 1.8zM10 15.4c.996 0 1.8.804 1.8 1.8v6c0 .996-.804 1.8-1.8 1.8s-1.8-.804-1.8-1.8v-6c0-.996.804-1.8 1.8-1.8zM2.8 15.4h1.8v1.8c0 .996-.804 1.8-1.8 1.8S1 18.196 1 17.2s.804-1.8 1.8-1.8zM15.4 16c0-.996.804-1.8 1.8-1.8h6c.996 0 1.8.804 1.8 1.8s-.804 1.8-1.8 1.8h-6c-.996 0-1.8-.804-1.8-1.8zM17.2 21.4h-1.8v1.8c0 .996.804 1.8 1.8 1.8s1.8-.804 1.8-1.8-.804-1.8-1.8-1.8zM10.6 10c0-.996-.804-1.8-1.8-1.8h-6C1.804 8.2 1 9.004 1 10s.804 1.8 1.8 1.8h6c.996 0 1.8-.804 1.8-1.8zM8.8 4.6h1.8V2.8c0-.996-.804-1.8-1.8-1.8S7 1.804 7 2.8s.804 1.8 1.8 1.8z"
                stroke={theme.colors.gray500}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://github.com/prisma">
            <svg
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99 21.576C3.283 23.288 3.283 18.722 1 18.152M16.98 25v-4.417a3.847 3.847 0 00-1.073-2.98c3.584-.399 7.35-1.757 7.35-7.99a6.21 6.21 0 00-1.712-4.28 5.787 5.787 0 00-.103-4.302S20.096.63 16.98 2.72a15.272 15.272 0 00-7.99 0C5.874.63 4.527 1.03 4.527 1.03a5.787 5.787 0 00-.103 4.304 6.21 6.21 0 00-1.712 4.314c0 6.187 3.767 7.545 7.35 7.99a3.847 3.847 0 00-1.072 2.945V25"
                stroke={theme.colors.gray500}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <p className="copyright">Prisma © 2018-2020.</p>
        <p className="berlin">Made with ❤️ in Berlin and worldwide</p>
      </div>
    </div>
  </FooterSection>
);

export default Footer;
