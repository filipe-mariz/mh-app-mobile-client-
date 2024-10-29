import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from './styles';
import { router } from 'expo-router'


export default function LoginScreen() {
  const CreateUser = () => {
    console.log('teste');
    router.push('/user-confirmation')
  }

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
      <TouchableOpacity style={styles.login} onPress={CreateUser}>
        <ThemedText type={"defaultSemiBold"} style={styles.textButton}>Criar conta</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}
