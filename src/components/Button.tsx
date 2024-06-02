import { Plus } from 'phosphor-react-native'
import { Button } from 'react-native-elements'
export function ButtonCutom(props: { title: string }) {
  return (
    <Button
      icon={<Plus size={20} color="white" />}
      title={props.title}
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
  )
}
