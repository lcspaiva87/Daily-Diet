import { ArrowUpRight } from 'phosphor-react-native'
import { View } from 'react-native'
import { Text } from 'react-native-elements'
interface CardPercentProps {
  percent: number
  color: string
}

export function CardPercent({ color, percent }: CardPercentProps) {
  return (
    <View className="px-4 py-5 bg-sucessucess-Light items-center gap-1 rounded-lg  mt-7 mb-10 ">
      <ArrowUpRight
        size={24}
        color={color}
        style={{
          position: 'absolute',
          top: 0,
          right: 10,
          transform: [{ translateY: -10 }, { translateX: 10 }],
        }}
      />
      <Text className="text-4xl font-bold">{percent}%</Text>
      <Text className="text-lg">das refeições dentro da dieta</Text>
    </View>
  )
}
