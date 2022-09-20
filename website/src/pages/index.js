import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
	<header className={clsx('hero hero--primary', styles.heroBanner)}>
	    <div className="container">
		<h1 className="hero__title">{siteConfig.title}</h1>
		<p className="hero__subtitle">{siteConfig.tagline}</p>
		<img src="img/dtcc-logo.svg" width="400"></img>
	    </div>
	</header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
	<Layout
	    title={`${siteConfig.title}`}
	    description="An open-source platform for Digital Twin Cities">
	    <HomepageHeader />
	    <main>
		<HomepageFeatures />
	    </main>
	</Layout>
    );
}

/* AL: Code for adding a button in case we need it
<div className={styles.buttons}>
    <Link
	className="button button--secondary button--lg"
	to="/docs/introduction">
	Documentation 📚
    </Link>
</div>
*/
