import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDivide, faXmark, faMinus, faEquals, faPercent, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const App = () => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.calculateSpace}>

				</View>
				<View style={styles.inputSpace}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed')}
							style={styles.button}>
							<View style={[styles.button]}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>AC</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>
									<FontAwesomeIcon icon={faDeleteLeft} style={[styles.buttonTextColor, styles.specialButtonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>+/-</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>
									<FontAwesomeIcon icon={faDivide} style={[styles.buttonTextColor, styles.specialButtonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>7</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>8</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>9</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>
									<FontAwesomeIcon icon={faXmark} style={[styles.buttonTextColor, styles.specialButtonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>4</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>5</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>6</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>
									<FontAwesomeIcon icon={faMinus} style={[styles.buttonTextColor, styles.specialButtonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>1</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>2</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>3</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>+</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>
									<FontAwesomeIcon icon={faPercent} style={[styles.buttonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>0</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>.</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.6}
							underlayColor="#DDDDDD"
							onPress={() => alert('Pressed!')}
							style={[styles.button]}>
							<View style={[styles.button, styles.specialButtonBackground]}>
								<Text style={[styles.buttonTextColor]}>
									<FontAwesomeIcon icon={faEquals} style={[styles.buttonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
					</View>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calculateSpace: {
		flex: 0.5,
		backgroundColor: '#000000',
	},
	inputSpace: {
		flex: 0.5,
		backgroundColor: '#000000',
		borderTopColor: '#37373D',
		borderTopWidth: 1,
		justifyContent: 'space-evenly',
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0F0F0F',
		width: 70,
		height: 60,
		borderRadius: 100,
	},
	buttonTextColor: {
		color: 'white',
		fontSize: 25,
	},
	specialButtonTextColor: {
		color: '#0073E6'
	},
	specialButtonBackground: {
		backgroundColor: '#0073E6',
	},
})

export default App;