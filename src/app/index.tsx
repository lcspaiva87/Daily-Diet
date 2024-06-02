import { ArrowUpRight, Plus } from 'phosphor-react-native'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import LogoDailyDiet from '../assets/logo/Logo.png'

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex justify-between p-6">
        <View className="flex justify-between flex-row ">
          <Image source={LogoDailyDiet} alt="Logo dailyDiet" />
          <Image
            className="w-14 h-14 rounded-full "
            source={{
              uri: 'https://criticalhits.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/05/1141713-768x505.jpg.webp',
            }}
          />
        </View>
        <View className="px-4 py-5 bg-sucessucess-Light items-center gap-1 rounded-lg  mt-7 mb-10 ">
          <ArrowUpRight
            size={24}
            color="#639339"
            style={{
              position: 'absolute',
              top: 0,
              right: 10,
              transform: [{ translateY: -10 }, { translateX: 10 }],
            }}
          />
          <Text className="text-4xl font-bold">90,86%</Text>
          <Text className="text-lg">das refeições dentro da dieta</Text>
        </View>
        <View>
          <Text className="text-base font-normal">Refeiçao</Text>
          <Button
            icon={<Plus size={20} color="white" />}
            title="Nova refeição"
            buttonStyle={{
              backgroundColor: '#333638',
              borderRadius: 10,
              paddingHorizontal: 24,
              paddingVertical: 16,
              display: 'flex',
              gap: 8,
              marginBottom: 32,
              marginTop: 8,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
