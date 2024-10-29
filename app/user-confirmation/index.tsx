import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from './styles'

export default function LoginScreen() {
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
          Você receberá um código de confirmação em seu
          <Text style={styles.text}> E-mail </Text>
        </ThemedText>
        <ThemedText type={"default"} style={styles.mt_20}>
          Este código tem validade de
          <ThemedText type={"defaultSemiBold"}> 24 horas </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.mt_150}>
        <ThemedText type={"defaultSemiBold"}>
          Qual o seu <Text style={styles.text}>código de confirmação</Text>?
        </ThemedText>
        <TextInput style={styles.input} placeholder='XXX-XXX' />
      </ThemedView>

      <TouchableOpacity style={[styles.login, styles.mt_150]}>
        <ThemedText type={"defaultSemiBold"} style={styles.textButton}>Criar conta</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}
