import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		borderColor: '#6A94A1',
	},
	text: {
		color: "#6A94A1"
	},
	mt_20: {
		marginTop: 20,
	},
	mt_150: {
		marginTop: 150,
	},
	header: {
		backgroundColor: "#000000",
		color: "#FFFFFF",
		width: "100%",
		height: 60
	},
	login: {
		backgroundColor: "#6A94A1",
		width: 120,
		height:25,
		alignItems: 'center',
		marginLeft: 100,
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

export { styles };
