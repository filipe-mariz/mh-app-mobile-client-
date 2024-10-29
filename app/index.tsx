import { Image, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router'

export default function HomeScreen() {
	return (
		<>
			<View style={styles.container}>
				<Image
					source={require('@/assets/images/mission-house.png')}
					style={styles.image}
				/>
				<ThemedView style={styles.title}>
					<ThemedText type={"title"} style={styles.title}>
						Mission House
					</ThemedText>
				</ThemedView>
				<ThemedView style={styles.form}>
					<ThemedText type={"defaultSemiBold"} style={styles.text}>
						Login
					</ThemedText>
					<TextInput style={styles.input} />
					<ThemedText type={"defaultSemiBold"} style={styles.text}>
						Senha
					</ThemedText>
					<TextInput style={styles.input} />
				</ThemedView>
				<TouchableOpacity style={styles.login}>
					<ThemedText type={"defaultSemiBold"} style={styles.textButton}>Login</ThemedText>
				</TouchableOpacity>
				<Link href={'/user'} style={styles.link}>Criar uma conta</Link>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#000000",
		flex: 1,
		alignItems: 'center',
	},
	image: {
		marginTop: 70,
	},
	form: {
		width: "85%",
		height: "25%",
		marginTop: 100,
		backgroundColor: "none",

	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		backgroundColor: 'none',
		borderRadius: 10,
		borderColor: '#FFFFFF',
		color: "#FFFFFF"
	},
	text: {
		color: "#FFFFFF",
		marginLeft: 20
	},
	title: {
		backgroundColor: "none",
		color: "#FFFFFF",
		marginTop: 40,
		fontWeight: 'bold',
	},
	titleText: {
		fontWeight: '900',
	},
	login: {
		backgroundColor: "#6A94A1",
		width: 100,
		alignItems: 'center',
		borderRadius: 8
	},
	textButton: {
		color: "#FFFFFF",
	},
	link: {
		color: '#6A94A1',
		marginTop: 10
	}
});

