import { Input } from '@/src/components/Inputs'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import { Platform, View } from 'react-native'

export default function newMeal() {
  const [show, setShow] = useState(false)
  const [date, setDate] = useState(new Date())

  const showDatepicker = () => {
    setShow(true)
  }
  const onChange = (selectedDate: any) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }
  return (
    <View className="px-6 py-10 bg-white w-full ">
      <Input title="Nome da refeição" />
      <Input
        title="Descrição"
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
      />
      <View className="flex flex-row justify-between w-full  mt-2">
        <Input
          title="Data"
          className="bg-base-700 border border-base-500  rounded-lg p-3  w-[126px] "
          onFocus={showDatepicker}
          value={date.toLocaleDateString()}
        />
        {show && (
          <DateTimePicker
            value={date}
            testID="dateTimePicker"
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
            className="bg-base-700 border border-base-500  rounded-lg  "
          />
        )}
        <Input
          title="Hora"
          className="  w-[126px] items-center flex justify-center  mt-[5px]"
          onFocus={showDatepicker}
          value={date.toLocaleDateString()}
          textAlignVertical="center"
        />

        {show && (
          <DateTimePicker
            value={date}
            testID="dateTimePicker"
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={onChange}
            className="bg-base-700 border border-base-500  rounded-lg p-3 "
          />
        )}
      </View>
    </View>
  )
}
