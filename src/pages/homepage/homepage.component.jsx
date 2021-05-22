import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

import { HomePageCointainer } from './homepage.styles'

const HomePage = () => (
	<HomePageCointainer>
		<Directory />
	</HomePageCointainer>
);

export default HomePage;