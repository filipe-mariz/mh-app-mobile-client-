import { Image, StyleSheet, Text, TextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#1D3D47', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/mission-house.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView>
        <ThemedText type={"title"}>
          Vamos começar sua jornada como
          <Text style={styles.text}> Missionário </Text>
          da
          <Text style={styles.text}> Janela 10/40</Text>
        </ThemedText>
        <ThemedText type={"default"} style={styles.mt_20}>
          Estamos aqui para te ajudar nessa jornada. Sabemos todas as dificuldades existentes,
          mas nosso
          <ThemedText type={"defaultSemiBold"}> Deus é o Deus do impossível! </ThemedText>
          Vamos comeár nossa jornada?
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.mt_20}>
        <ThemedText type={"defaultSemiBold"}>
          Qual o seu <Text style={styles.text}>nome completo</Text>?
        </ThemedText>
        <TextInput style={styles.input} placeholder='Nome Completo' />
        <ThemedText type={"defaultSemiBold"}>
          Qual o seu <Text style={styles.text}>CPF</Text>?
        </ThemedText>
        <TextInput style={styles.input} placeholder='___.___.___-__' />
        <ThemedText type={"defaultSemiBold"}>
          Qual o seu <Text style={styles.text}>WhatsApp</Text>?
        </ThemedText>
        <TextInput style={styles.input} placeholder='(ddd) 9XXXX-XXXX' />
        <ThemedText type={"defaultSemiBold"}>
          Qual o seu <Text style={styles.text}>E-Mail</Text>?
        </ThemedText>
        <TextInput style={styles.input} placeholder='usuario@exemplo.com' />
        <ThemedText type={"defaultSemiBold"}>
          Defina sua <Text style={styles.text}>senha</Text>?
        </ThemedText>
        <TextInput style={styles.input} placeholder='*****************' />
        <ThemedText type={"defaultSemiBold"}>
          Confirme sua <Text style={styles.text}>senha</Text>?
        </ThemedText>
        <TextInput style={styles.input} placeholder='*****************' />
      </ThemedView>
    </ParallaxScrollView>
  );
}

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
  header: {
    backgroundColor:  "#000000",
    color: "#FFFFFF",
    width: "100%",
    height: 60
  }
});