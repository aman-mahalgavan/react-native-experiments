import React, { Component } from 'react';
import {
	Dimensions,
	View,
	StyleSheet,
	ScrollView,
	Image,
	TouchableHighlight,
	Touchable
} from 'react-native';
import PropTypes from 'prop-types';
import ImageViewer from 'ImageViewer';
import GalleryImage from './galleryImage';

export default class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photos: [
				{
					label: 'beach',
					src: require('../assets/gallery_images/Wall118.jpg')
				},
				{
					label: 'bridge',
					src: require('../assets/gallery_images/Wall119.jpg')
				},
				{
					label: 'fields',
					src: require('../assets/gallery_images/Wall120.jpg')
				},
				{
					label: 'mountains',
					src: require('../assets/gallery_images/Wall121.jpg')
				},
				{
					label: 'sunflower',
					src: require('../assets/gallery_images/Wall122.jpg')
				},
				{
					label: 'sunset',
					src: require('../assets/gallery_images/Wall123.jpg')
				},
				{
					label: 'lake',
					src: require('../assets/gallery_images/Wall124.jpg')
				},
				{
					label: 'nature',
					src: require('../assets/gallery_images/Wall125.jpg')
				},
				{
					label: 'pink',
					src: require('../assets/gallery_images/Wall126.jpg')
				}
			]
		};
	}

	clickImage = (index) => {
		alert(JSON.stringify(this.state.photos[index]), index);
	}

	renderGallery() {
		var count = 0;
		var previous_item = '';
		var pairs = this.getPairsArray(this.state.photos);
		return pairs.map((item, index) => {
			return (
				<View style={styles.item} key={index}>
					<TouchableHighlight onPress={() => this.clickImage(index)}>
						<Image
							style={styles.photo}
							source={item[0].src} />
					</TouchableHighlight>

					<TouchableHighlight onPress={() => this.clickImage(index)}>
						<Image
							style={styles.photo}
							source={item[1].src} />
					</TouchableHighlight>

					{/* <Image
						resizeMode='cover'
						style={styles.photo}
						source={item[0].src} />
					<Image
						resizeMode='cover'
						style={styles.photo}
						source={item[1].src} /> */}
				</View>
			);
		});
	}

	getPairsArray(photos) {
		var pairs_r = [];
		var pairs = [];
		var count = 0;
		photos.forEach((item) => {
			count += 1;
			pairs.push(item);
			if (count == 2) {
				pairs_r.push(pairs)
				count = 0;
				pairs = [];
			}
		});
		return pairs_r;
	}

	render() {
		const images = [
			require('../assets/gallery_images/Wall118.jpg'),
			require('../assets/gallery_images/Wall119.jpg'),
			require('../assets/gallery_images/Wall120.jpg'),
			require('../assets/gallery_images/Wall121.jpg'),
			require('../assets/gallery_images/Wall122.jpg'),
			require('../assets/gallery_images/Wall123.jpg'),
			require('../assets/gallery_images/Wall124.jpg'),
			require('../assets/gallery_images/Wall125.jpg'),
			require('../assets/gallery_images/Wall126.jpg')
		];

		return (
			<View style={styles.container}>
				<ScrollView style={styles.gallery}>
					{this.renderGallery()}
				</ScrollView>
				<View style={styles.tabs}>
				</View>
			</View>
		);

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	gallery: {
		flexDirection: 'column'
	},
	tabs: {
		flexDirection: 'row',
		backgroundColor: '#333',
		padding: 20
	},
	tab: {
		flex: 1
	},
	icon: {
		textAlign: 'center'
	},
	item: {
		flex: 1,
		flexDirection: 'row',
	},

	photo: {
		flex: 1,
		width: 204,
		height: 400,
		resizeMode: 'cover'
	}
})