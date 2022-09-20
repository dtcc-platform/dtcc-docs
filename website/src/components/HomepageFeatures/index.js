import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
	title: 'Advanced Modeling & Simulation',
	image: "img/dtcc-modeling-and-simulation.jpg",
	description: (
	    <>
		DTCC Platform provides advanced modeling and simulation for
		planning, design, exploration, experimentation, and optimization of cities.
	    </>
	),
    },
    {
	title: 'High-Performance Computing',
	image: "img/dtcc-high-performance.jpg",
	description: (
	    <>
		DTCC Platform is designed for high-performance modeling & simulation and
		high-performance communication & visualization of large datasets.
	    </>
	),
    },
    {
	title: 'Open-Source',
	image: "img/dtcc-open-source.jpg",
	description: (
	    <>
		DTCC Platform is free/open-source software licensed under the MIT License
		developed at the <a href="https://dtcc.chalmers.se">Digital Twin Cities Centre</a>.
	    </>
	),
    },
];

function Feature({image, title, description}) {
    return (
	<div className={clsx('col col--4')}>
	    <div className="text--center">
		<img src={image} width="90%" />
	    </div>
	    <br/>
	    <div className="text--center padding-horiz--md">
		<h3>{title}</h3>
		<p>{description}</p>
	    </div>
	</div>
    );
}

export default function HomepageFeatures() {
    return (
	<section className={styles.features}>
	    <div className="container">
		<div className="row">
		    {FeatureList.map((props, idx) => (
			<Feature key={idx} {...props} />
		    ))}
		</div>
	    </div>
	</section>
    );
}
