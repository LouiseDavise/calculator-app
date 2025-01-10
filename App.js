import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDivide, faXmark, faMinus, faEquals, faPercent, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { create, all } from 'mathjs'

const config = {}
const math = create(all, config)

const App = () => {
	const [count, setCount] = useState(0);
	const [titleText, setTitleText] = useState("");
	const [valueText, setValueText] = useState("");
	const [result, setResult] = useState("");

	const onPressButton9 = () => {
		setTitleText(titleText.concat("9"));
	};

	const onPressButton8 = () => {
		setTitleText(titleText.concat("8"));
	};

	const onPressButton7 = () => {
		setTitleText(titleText.concat("7"));
	};

	const onPressButton6 = () => {
		setTitleText(titleText.concat("6"));
	};

	const onPressButton5 = () => {
		setTitleText(titleText.concat("5"));
	};

	const onPressButton4 = () => {
		setTitleText(titleText.concat("4"));
	};

	const onPressButton3 = () => {
		setTitleText(titleText.concat("3"));
	};

	const onPressButton2 = () => {
		setTitleText(titleText.concat("2"));
	};

	const onPressButton1 = () => {
		setTitleText(titleText.concat("1"));
	};

	const onPressButton0 = () => {
		setTitleText(titleText.concat("0"));
	};

	const onPressButtonAddition = () => {
		let lastValue = titleText.substring(titleText.length - 1);
		if (lastValue == "+" || lastValue == "−" || lastValue == "×" || lastValue == "÷") {
			setTitleText(titleText.slice(0, -1).concat("+"));
		} else {
			setTitleText(titleText.concat("+"));
		}
	};

	const onPressButtonMultiple = () => {
		let lastValue = titleText.substring(titleText.length - 1);
		if (lastValue == "+" || lastValue == "−" || lastValue == "×" || lastValue == "÷") {
			setTitleText(titleText.slice(0, -1).concat("×"));
		} else {
			setTitleText(titleText.concat("×"));
		}
	};

	const onPressButtonSubstitute = () => {
		let lastValue = titleText.substring(titleText.length - 1);
		if (lastValue == "+" || lastValue == "−" || lastValue == "×" || lastValue == "÷") {
			setTitleText(titleText.slice(0, -1).concat("−"));
		} else {
			setTitleText(titleText.concat("−"));
		}
	};

	const onPressButtonDivide = () => {
		let lastValue = titleText.substring(titleText.length - 1);
		if (lastValue == "+" || lastValue == "−" || lastValue == "×" || lastValue == "÷") {
			setTitleText(titleText.slice(0, -1).concat("÷"));
		} else {
			setTitleText(titleText.concat("÷"));
		}
	};

	const onPressButtonPercentage = () => {
		setTitleText(titleText.concat("%"));
	}

	const getValueBeforeLastOperator = (input) => {
		const lastOperatorIndex = Math.max(
			input.lastIndexOf("+"),
			input.lastIndexOf("−"),
			input.lastIndexOf("×"),
			input.lastIndexOf("÷")
		);
		return input.substring(lastOperatorIndex + 1);
	};

	const onPressButtonPosMin = () => {
		let value = getValueBeforeLastOperator(titleText);
		initialValueLength = value.length;
		if (value.length > 0) {
			if (value[0] === '(' && value[1] === '-' && value[value.length - 1] === ')') {
				value = value.slice(2, -1);
				setTitleText(titleText.slice(0, -initialValueLength).concat(value));
			} else {
				value = `(-${value})`;
				setTitleText(titleText.slice(0, -initialValueLength).concat(value));
			}
		}
	}

	const onPressButtonDot = () => {
		const value = getValueBeforeLastOperator(titleText);
		if (value.indexOf(".") === -1) {
			setTitleText(titleText.concat("."));
		}
	}

	const onPressButtonAC = () => {
		setTitleText("");
		setResult("");
	};

	const onPressButtonBackSpace = () => {
		let afterBackSpace = titleText.substring(0, titleText.length - 1);
		setTitleText(afterBackSpace);
	};

	const onPressButtonResult = () => {
		try {
			let equation = titleText
				.replace(/×/g, "*")
				.replace(/÷/g, "/")
				.replace(/−/g, "-");

			let result = math.evaluate(equation);

			result = math.format(result, { precision: 14 });

			setResult(result.toString());
		} catch (error) {
			console.error("Invalid equation:", error);
			setResult("Error");
		}
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View style={styles.calculateSpace}>
					{/* <Text style={styles.inputText}>
						{titleText}
					</Text> */}
					<TextInput
						style={styles.inputText}
						value={titleText}
						onChangeText={(text) => setTitleText(text)}
						keyboardType="none"
						placeholder="0" // Optional: Placeholder text
						placeholderTextColor="#555555"
						selection={{ start: titleText.length, end: titleText.length }} // Handle cursor positioning
						autoCorrect={false} // Disable auto-correction
						autoCapitalize="none" // Disable auto-capitalization
						onSelectionChange={(event) => {
							console.log("Cursor Position:", event.nativeEvent.selection);
						}}
					/>
					<Text style={styles.inputResult}>
						{result}
					</Text>
				</View>
				<View style={styles.inputSpace}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonAC}
							style={styles.button}>
							<View style={[styles.button]}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>AC</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonBackSpace}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>
									<FontAwesomeIcon icon={faDeleteLeft} style={[styles.buttonTextColor, styles.specialButtonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonPosMin}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>+/-</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonDivide}
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
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton7}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>7</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton8}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>8</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton9}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>9</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonMultiple}
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
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton4}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>4</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton5}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>5</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton6}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>6</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonSubstitute}
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
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton1}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>1</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton2}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>2</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton3}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>3</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonAddition}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>+</Text>
							</View>
						</TouchableHighlight>
					</View>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonPercentage}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={[styles.buttonTextColor, styles.specialButtonTextColor]}>
									<FontAwesomeIcon icon={faPercent} style={[styles.buttonTextColor]} />
								</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButton0}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>0</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonDot}
							style={styles.button}>
							<View style={styles.button}>
								<Text style={styles.buttonTextColor}>.</Text>
							</View>
						</TouchableHighlight>
						<TouchableHighlight
							activeOpacity={0.8}
							underlayColor="#DDDDDD"
							onPress={onPressButtonResult}
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
		justifyContent: 'center',
		alignItems: 'flex-end',
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
		width: 80,
		height: 70,
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
	inputText: {
		fontSize: 55,
		fontWeight: 'semibold',
		color: 'white',
		marginHorizontal: 15,
	},
	inputResult: {
		fontSize: 20,
		color: '#BDBDBD',
		marginHorizontal: 15,
	},
})

export default App;