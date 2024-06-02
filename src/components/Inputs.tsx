import { TextInputProps } from 'react-native'

import { Text, TextInput, View } from 'react-native'
type Props = TextInputProps & {
  title: string
}

export function Input({ title, ...rest }: Props) {
  return (
    <View className="flex gap-2 mt-2">
      <Text className="text-sm">{title}</Text>
      <TextInput
        {...rest}
        textAlignVertical="top"
        className="bg-base-700 border border-base-500  rounded-lg px-3 py-2 "
      />
    </View>
  )
}
